import { useInvoiceStore } from '~/store/useInvoiceStore';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';

export default function ExplanationCard(): React.ReactNode {
  const { description, setDescription, personalNote, setPersonalNote } =
    useInvoiceStore();
  return (
    <Card className="border-slate-200 bg-white/90 backdrop-blur">
      <CardHeader className="bg-linear-to-r from-slate-100 to-slate-50 rounded-t-lg border-b border-slate-200">
        <CardTitle className="text-slate-800">توضیحات</CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-4">
        <div className="space-y-2">
          <Label className="text-slate-700">
            توضیحات فاکتور (نمایش در رسید تحویل)
          </Label>
          <Textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border-slate-200 focus:ring-slate-400 focus-visible:ring-offset-0 min-h-20"
            placeholder="توضیحات"
          />
        </div>
        <div className="space-y-2">
          <Label className="text-slate-700">
            توضیحات اختصاصی (فقط در فاکتور)
          </Label>
          <Textarea
            value={personalNote}
            onChange={(e) => setPersonalNote(e.target.value)}
            className="border-slate-200 focus:ring-slate-400 focus-visible:ring-offset-0 min-h-20"
            placeholder="توضیحات"
          />
        </div>
      </CardContent>
    </Card>
  );
}
