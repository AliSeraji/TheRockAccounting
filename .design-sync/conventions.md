# Rock Fact — building with this design system

Rock Fact is a Persian (Farsi) accounting app for a stone business. Components are shadcn/ui primitives (Radix + Tailwind v4) plus app-level invoice, receipt, customer and warehouse components. All are on `window.RockFact`.

## Setup

- **No provider is needed** for the `ui` primitives (Button, Card, Table, Dialog, Input, Label, Select, Tabs, Tooltip…). `Sidebar*` parts must sit inside `SidebarProvider`.
- **Always set `dir="rtl"`** on the container that holds Persian content. The document itself is not RTL; the app applies direction per container, including on `DialogContent`.
- Body text renders in **Samim** automatically (set on `html, body`). Use `font-vazirmatn` for printed receipts and invoices.
- Write numbers with Persian digits (۰۱۲۳۴۵۶۷۸۹) and amounts in Rial with `٬` separators, e.g. `۱۴۷٬۱۰۰٬۰۰۰`.
- Page-level components (`CustomerForm`, `InvoiceBody`, `SettingsSidebar`, `WareHouseAssets`…) read app state and take no props; prefer composing `ui` primitives for new screens.

## Styling

Tailwind utility classes only; there are no CSS modules. Theme tokens (defined in `styles.css`):

| Purpose | Classes |
|---|---|
| Surfaces | `bg-background`, `bg-card`, `bg-muted`, `bg-secondary` |
| Text | `text-foreground`, `text-muted-foreground`, `text-primary-foreground` |
| Brand / danger | `bg-primary`, `bg-destructive`, `text-destructive` |
| Radius / shadow | `rounded-md`, `rounded-lg`, `shadow-sm` |

The app also uses Tailwind's slate/teal/emerald palette directly: `bg-slate-50` table headers, `text-slate-600` secondary text, `bg-teal-50` selected rows, `bg-emerald-100 text-emerald-800` "active" pills. Only classes the app already uses are compiled — stick to these and the component props.

Button: `variant` = `default | secondary | outline | ghost | destructive | link`, `size` = `default | sm | lg | icon`. Destructive buttons show dark text on red (the theme has no destructive foreground color).

## Example

```jsx
<div dir="rtl" className="grid gap-4 p-6">
  <Card>
    <CardHeader>
      <CardTitle>مشتریان</CardTitle>
      <CardDescription>۴ مشتری فعال</CardDescription>
    </CardHeader>
    <CardContent>
      <Table className="w-full text-sm">
        <TableHeader>
          <TableRow className="bg-slate-50 text-slate-600">
            <TableHead className="text-right">نام</TableHead>
            <TableHead className="text-right">شهر</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>سنگ‌بری آریا</TableCell>
            <TableCell>اصفهان</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </CardContent>
    <CardFooter className="gap-2">
      <Button>افزودن مشتری</Button>
      <Button variant="outline">خروجی</Button>
    </CardFooter>
  </Card>
</div>
```
