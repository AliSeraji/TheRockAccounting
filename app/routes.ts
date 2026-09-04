import { type RouteConfig, index, route } from '@react-router/dev/routes';
import {
  RECEIPT_ISSUE,
  SETTINGS,
  WAREHOUSE,
  CUSTOMER_REGISTER,
} from './routes/constants';

export default [
  index('routes/home.tsx'),
  route(RECEIPT_ISSUE, 'routes/receipts/index.tsx'),
  route(SETTINGS, 'routes/settings/index.tsx'),
  route(WAREHOUSE, 'routes/warehouse/index.tsx'),
  route(CUSTOMER_REGISTER, 'routes/customers/index.tsx'),
  route('*', 'routes/not-found.tsx'),
] satisfies RouteConfig;
