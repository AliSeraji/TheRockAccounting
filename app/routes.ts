import { type RouteConfig, index, route } from '@react-router/dev/routes';
import { INVOICE } from './routes/constants';

export default [
  index('routes/home.tsx'),
  route(INVOICE, 'routes/receipts/Invoice.tsx'),
  route('*', 'routes/not-found.tsx'),
] satisfies RouteConfig;
