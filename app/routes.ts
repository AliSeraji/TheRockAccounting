import { type RouteConfig, index, route } from '@react-router/dev/routes';
import {
  INVOICE,
  RECEIPT_ISSUE,
  SETTINGS,
  WAREHOUSE,
} from './routes/constants';

export default [
  index('routes/home.tsx'),
  route(RECEIPT_ISSUE, 'routes/receipts/index.tsx'),
  route(INVOICE, 'routes/receipts/Invoice.tsx'),
  route(SETTINGS, 'routes/settings/index.tsx'),
  route(WAREHOUSE, 'routes/ware-house/index.tsx'),
  route('*', 'routes/not-found.tsx'),
] satisfies RouteConfig;
