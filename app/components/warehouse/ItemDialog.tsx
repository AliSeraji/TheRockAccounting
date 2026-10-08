import { useState, type ReactNode } from 'react';
import { Package, Pencil, Save, Trash2, X } from 'lucide-react';
import { toast } from 'sonner';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { useWarehouseStore } from '~/store/warehouse/useWarehouse';
import { normalizeCode } from '~/store/warehouse/helpers';
import type { FormFieldConfig } from './constants';
import FormField from './FormField';
import ItemDetails from './ItemDetails';
import { Alert } from './Alert';

const primaryButton =
  'gap-2 bg-linear-to-r from-brand-700 to-brand-900 hover:from-brand-800 hover:to-brand-950 text-white shadow-md hover:cursor-pointer';

const footerClass = 'm-0 px-6 py-4 flex-row flex-wrap sm:justify-start';

// `code` is optional: only warehouses that use codes get the uniqueness check.
type DialogItem = { id: number; code?: string; notes: string; date: string };

interface ItemDialogProps<T extends DialogItem> {
  // Singular noun for the items
  noun: string;
  items: T[];
  fields: FormFieldConfig<T>[];
  emptyItem: T;
  nameOf: (item: T) => string;
  // Updates calculated fields after `field` changes.
  derive?: (item: T, field: keyof T) => T;
  // Returns the id assigned to the new item.
  onAdd: (item: T) => number;
  onUpdate: (id: number, item: T) => void;
  onRemove: (id: number) => void;
  // Extra buttons shown next to "Edit" while viewing an item.
  viewActions?: (item: T) => ReactNode;
}

export default function ItemDialog<T extends DialogItem>({
  noun,
  items,
  fields,
  emptyItem,
  nameOf,
  derive,
  onAdd,
  onUpdate,
  onRemove,
  viewActions,
}: ItemDialogProps<T>): ReactNode {
  const editor = useWarehouseStore((state) => state.editor);
  const startEditing = useWarehouseStore((state) => state.startEditing);
  const closeEditor = useWarehouseStore((state) => state.closeEditor);
  const [confirmDelete, setConfirmDelete] = useState(false);

  const openItemData =
    editor.mode === 'view' || editor.mode === 'edit'
      ? items.find((item) => item.id === editor.id)
      : undefined;
  const isForm = editor.mode === 'edit' || editor.mode === 'create';
  const isOpen = editor.mode === 'create' || openItemData !== undefined;

  const handleDelete = () => {
    if (!openItemData) return;
    onRemove(openItemData.id);
    closeEditor();
    toast.error(`${noun} «${nameOf(openItemData)}» حذف شد.`);
  };

  const title =
    editor.mode === 'create'
      ? `ایجاد ${noun} جدید`
      : editor.mode === 'edit'
        ? `ویرایش ${noun}`
        : openItemData && nameOf(openItemData);

  const deleteButton = (
    <Button
      variant="destructive"
      onClick={() => setConfirmDelete(true)}
      className="gap-2 mr-auto hover:cursor-pointer text-white"
    >
      <Trash2 className="w-4 h-4 stroke-white" />
      حذف
    </Button>
  );

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && closeEditor()}>
      <DialogContent
        dir="rtl"
        className="sm:max-w-2xl max-h-[90vh] flex flex-col gap-0 p-0 overflow-hidden font-vazirmatn"
      >
        <DialogHeader className="px-6 pt-5 pb-4 pr-12 border-b border-brand-200 bg-linear-to-r from-brand-100 to-slate-50">
          <DialogTitle className="flex items-center gap-2 text-lg font-semibold text-slate-800">
            {isForm ? (
              <Pencil className="w-5 h-5 text-brand-600" />
            ) : (
              <Package className="w-5 h-5 text-brand-600" />
            )}
            {title}
          </DialogTitle>
          <DialogDescription className="font-mono text-brand-900">
            {editor.mode === 'create' ? '' : (openItemData?.code ?? '')}
          </DialogDescription>
        </DialogHeader>

        {isForm ? (
          <ItemForm
            // Remount per item so the draft starts from fresh data each time.
            key={editor.mode === 'edit' ? `edit-${editor.id}` : 'create'}
            initial={openItemData ?? emptyItem}
            isNew={editor.mode === 'create'}
            noun={noun}
            items={items}
            fields={fields}
            nameOf={nameOf}
            derive={derive}
            onAdd={onAdd}
            onUpdate={onUpdate}
            deleteButton={editor.mode === 'edit' ? deleteButton : null}
          />
        ) : (
          openItemData && (
            <>
              <div className="flex-1 overflow-y-auto px-6 py-4">
                <ItemDetails item={openItemData} fields={fields} />
              </div>
              <DialogFooter className={footerClass}>
                <Button
                  onClick={() => startEditing(openItemData.id)}
                  className={primaryButton}
                >
                  <Pencil className="w-4 h-4" />
                  ویرایش
                </Button>
                {viewActions?.(openItemData)}
                {deleteButton}
              </DialogFooter>
            </>
          )
        )}

        <Alert
          open={confirmDelete}
          set={setConfirmDelete}
          title={`حذف ${noun}`}
          description={`آیا از حذف «${openItemData ? nameOf(openItemData) : ''}» مطمئن هستید؟ این عملیات قابل بازگشت نیست.`}
          variant="warning"
          cancelText="انصراف"
          confirmText="حذف"
          onConfirm={handleDelete}
        />
      </DialogContent>
    </Dialog>
  );
}

interface ItemFormProps<T extends DialogItem> {
  initial: T;
  isNew: boolean;
  noun: string;
  items: T[];
  fields: FormFieldConfig<T>[];
  nameOf: (item: T) => string;
  derive?: (item: T, field: keyof T) => T;
  onAdd: (item: T) => number;
  onUpdate: (id: number, item: T) => void;
  deleteButton: ReactNode;
}

function ItemForm<T extends DialogItem>({
  initial,
  isNew,
  noun,
  items,
  fields,
  nameOf,
  derive,
  onAdd,
  onUpdate,
  deleteButton,
}: ItemFormProps<T>): ReactNode {
  const openItem = useWarehouseStore((state) => state.openItem);
  const closeEditor = useWarehouseStore((state) => state.closeEditor);
  const [draft, setDraft] = useState(initial);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (field: keyof T & string, value: string) =>
    setDraft((prev) => {
      const next = { ...prev, [field]: value };
      return derive ? derive(next, field) : next;
    });

  const validate = (): string | null => {
    const missing = fields
      .filter(({ key, required }) => required && !String(draft[key]).trim())
      .map(({ label }) => label);
    if (missing.length > 0) {
      return `این فیلدها الزامی هستند: ${missing.join('، ')}`;
    }
    if (draft.code === undefined) return null;
    const code = normalizeCode(draft.code);
    const duplicate = items.some(
      (item) => item.id !== draft.id && normalizeCode(item.code ?? '') === code
    );
    if (duplicate) return `کد «${draft.code}» قبلاً در این انبار ثبت شده است.`;
    return null;
  };

  const handleSave = () => {
    const message = validate();
    if (message) {
      setError(message);
      return;
    }
    const item = { ...draft, date: new Date().toISOString() };
    if (isNew) {
      openItem(onAdd(item));
      toast.success(`${noun} «${nameOf(draft)}» با موفقیت اضافه شد.`);
    } else {
      onUpdate(draft.id, item);
      openItem(draft.id);
      toast.success(`${noun} «${nameOf(draft)}» با موفقیت ویرایش شد.`);
    }
  };

  const handleCancel = () => {
    if (isNew) closeEditor();
    else openItem(draft.id);
  };

  return (
    <>
      <div className="flex-1 overflow-y-auto px-6 py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {fields.map(
            ({ label, key, type, placeholder, required, allowNegative }) => (
              <FormField
                key={key}
                label={label}
                fieldKey={key}
                value={String(draft[key])}
                type={type}
                placeholder={placeholder}
                required={required}
                allowNegative={allowNegative}
                onChange={handleChange}
              />
            )
          )}
          <div className="flex flex-col space-y-2 sm:col-span-2">
            <Label className="text-slate-700 pr-1">توضیحات</Label>
            <Textarea
              value={draft.notes}
              onChange={(e) => handleChange('notes', e.target.value)}
              placeholder="توضیحات را وارد کنید..."
              className="border-slate-200 rounded-lg focus:ring-slate-400 min-h-24 resize-none"
            />
          </div>
        </div>
      </div>

      <DialogFooter className={footerClass}>
        <Button onClick={handleSave} className={primaryButton}>
          <Save className="w-4 h-4" />
          ذخیره
        </Button>
        <Button
          variant="outline"
          onClick={handleCancel}
          className="gap-2 hover:cursor-pointer"
        >
          <X className="w-4 h-4" />
          انصراف
        </Button>
        {deleteButton}
      </DialogFooter>

      <Alert
        open={error !== null}
        set={() => setError(null)}
        title="خطا"
        description={error ?? ''}
        variant="error"
      />
    </>
  );
}
