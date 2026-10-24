import { useState, type ReactNode } from 'react';
import { ClipboardCheck, Package, Pencil, Save, Trash2, X } from 'lucide-react';
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Textarea } from '../ui/textarea';
import { convertToPersianDigits } from '~/lib/utils';
import { useWarehouseStore } from '~/store/warehouse/useWarehouse';
import {
  formatQuantity,
  normalizeCode,
  parseQuantity,
} from '~/store/warehouse/helpers';
import type { WarehouseId } from '~/store/warehouse/types';
import type { FormFieldConfig } from './constants';
import { stockUnit } from './format';
import FormField from './FormField';
import ItemDetails from './ItemDetails';
import StockCard from './StockCard';
import { Alert } from './Alert';

const primaryButton =
  'gap-2 bg-linear-to-r from-brand-700 to-brand-900 hover:from-brand-800 hover:to-brand-950 text-white shadow-md hover:cursor-pointer';

const tabClass =
  'rounded-md px-3 py-1 text-xs font-medium text-slate-600 data-[state=active]:bg-white data-[state=active]:font-bold data-[state=active]:text-brand-700 data-[state=active]:shadow-sm';

const footerClass = 'm-0 px-6 py-4 flex-row flex-wrap sm:justify-start';

// `code` is optional: only warehouses that use codes get the uniqueness check.
type DialogItem = { id: string; code?: string; notes: string; date: string };

interface ItemDialogProps<T extends DialogItem> {
  // The warehouse the items belong to, for stock corrections.
  warehouse: WarehouseId;
  // Singular noun for the items
  noun: string;
  items: T[];
  fields: FormFieldConfig<T>[];
  emptyItem: T;
  nameOf: (item: T) => string;
  // Updates calculated fields after `field` changes.
  derive?: (item: T, field: keyof T) => T;
  // Returns the id assigned to the new item.
  onAdd: (item: T) => string;
  onUpdate: (id: string, item: T) => void;
  onRemove: (id: string) => void;
  // Extra buttons shown next to "Edit" while viewing an item.
  viewActions?: (item: T) => ReactNode;
}

export default function ItemDialog<T extends DialogItem>({
  warehouse,
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
          <DialogDescription className="font-vazirmatn text-brand-900">
            {editor.mode === 'create' ? '' : (openItemData?.code ?? '')}
          </DialogDescription>
        </DialogHeader>

        {isForm ? (
          <ItemForm
            // Remount per item so the draft starts from fresh data each time.
            key={editor.mode === 'edit' ? `edit-${editor.id}` : 'create'}
            warehouse={warehouse}
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
                {/* Keyed so each item opens on its details. */}
                <Tabs key={openItemData.id} defaultValue="details" dir="rtl">
                  <TabsList className="mb-3 h-auto w-fit gap-1 rounded-lg bg-slate-100 p-1">
                    <TabsTrigger value="details" className={tabClass}>
                      مشخصات
                    </TabsTrigger>
                    <TabsTrigger value="stock" className={tabClass}>
                      کاردکس
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="details" className="mt-0">
                    <ItemDetails item={openItemData} fields={fields} />
                  </TabsContent>
                  <TabsContent value="stock" className="mt-0">
                    <StockCard warehouse={warehouse} itemId={openItemData.id} />
                  </TabsContent>
                </Tabs>
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
  warehouse: WarehouseId;
  initial: T;
  isNew: boolean;
  noun: string;
  items: T[];
  fields: FormFieldConfig<T>[];
  nameOf: (item: T) => string;
  derive?: (item: T, field: keyof T) => T;
  onAdd: (item: T) => string;
  onUpdate: (id: string, item: T) => void;
  deleteButton: ReactNode;
}

function ItemForm<T extends DialogItem>({
  warehouse,
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
  const adjustStock = useWarehouseStore((state) => state.adjustStock);
  const [draft, setDraft] = useState(initial);
  // A saved item's stock stays locked until a correction is started.
  const [correcting, setCorrecting] = useState(false);
  const [reason, setReason] = useState('');
  const [error, setError] = useState<string | null>(null);

  const stockKey = fields.find((f) => f.stock)?.key;
  // How much a correction changes the saved stock.
  const stockDelta =
    !isNew && stockKey
      ? formatQuantity(
          parseQuantity(String(draft[stockKey])) -
            parseQuantity(String(initial[stockKey]))
        )
      : '0';
  const isDecrease = stockDelta.startsWith('-');

  const handleChange = (field: keyof T & string, value: string) =>
    setDraft((prev) => {
      const changed = { ...prev, [field]: value };
      const next = derive ? derive(changed, field) : changed;
      // A saved item's stock only changes when typed in during a correction,
      // never because `derive` recalculated it (a block's volume).
      if (!isNew && stockKey && field !== stockKey) {
        next[stockKey] = prev[stockKey];
      }
      return next;
    });

  // Drops the correction and puts the saved stock back.
  const cancelCorrection = () => {
    if (stockKey) handleChange(stockKey, String(initial[stockKey]));
    setCorrecting(false);
    setReason('');
  };

  const validate = (): string | null => {
    const missing = fields
      // A saved item's stock is only checked below, when it is corrected.
      .filter(({ stock }) => isNew || !stock)
      .filter(({ key, required }) => required && !String(draft[key]).trim())
      .map(({ label }) => label);
    if (missing.length > 0) {
      return `این فیلدها الزامی هستند: ${missing.join('، ')}`;
    }
    if (stockKey && stockDelta !== '0') {
      if (!String(draft[stockKey]).trim()) return 'موجودی جدید را وارد کنید.';
      if (!reason.trim()) return 'علت اصلاح موجودی را بنویسید.';
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
      // The update keeps the stored stock; a change is logged on its own.
      if (stockKey && stockDelta !== '0') {
        adjustStock(
          warehouse,
          draft.id,
          parseQuantity(String(draft[stockKey])),
          reason.trim()
        );
      }
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
            ({
              label,
              key,
              type,
              placeholder,
              required,
              allowNegative,
              stock,
            }) => {
              const field = (
                <FormField
                  key={key}
                  label={label}
                  fieldKey={key}
                  value={String(draft[key])}
                  type={type}
                  placeholder={placeholder}
                  required={required}
                  allowNegative={allowNegative}
                  readOnly={stock && !isNew && !correcting}
                  onChange={handleChange}
                />
              );
              if (!stock || isNew) return field;
              return (
                <div key={key} className="flex flex-col gap-1">
                  <div className="flex items-end gap-2">
                    <div className="flex-1">{field}</div>
                    {correcting ? (
                      <Button
                        variant="outline"
                        onClick={cancelCorrection}
                        className="gap-2 hover:cursor-pointer"
                      >
                        <X className="w-4 h-4" />
                        لغو اصلاح
                      </Button>
                    ) : (
                      <Button
                        variant="outline"
                        onClick={() => setCorrecting(true)}
                        className="gap-2 hover:cursor-pointer"
                      >
                        <ClipboardCheck className="w-4 h-4" />
                        اصلاح
                      </Button>
                    )}
                  </div>
                  {stockDelta !== '0' && (
                    <p className="pr-1 text-xs text-slate-600">
                      تغییر:{' '}
                      <span
                        dir="ltr"
                        className={`font-semibold ${isDecrease ? 'text-red-700' : 'text-emerald-700'}`}
                      >
                        {convertToPersianDigits(
                          isDecrease ? stockDelta : `+${stockDelta}`
                        )}
                      </span>{' '}
                      {stockUnit(warehouse)}
                    </p>
                  )}
                </div>
              );
            }
          )}
          {correcting && (
            <div className="flex flex-col space-y-2 sm:col-span-2">
              <Label className="text-slate-700 pr-1">
                علت اصلاح موجودی
                <span className="text-red-500">*</span>
              </Label>
              <Textarea
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                placeholder="مثلاً: اختلاف با شمارش انبار"
                className="border-slate-200 rounded-lg focus:ring-slate-400 min-h-20 resize-none"
              />
            </div>
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
