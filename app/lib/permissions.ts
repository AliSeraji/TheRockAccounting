// What only some users may do.
export type Permission = 'editSalesInvoice';

// Until users and access levels exist, everyone may do everything. Then this
// checks the current user's access level, and the server repeats the check.
export const can = (_permission: Permission): boolean => true;
