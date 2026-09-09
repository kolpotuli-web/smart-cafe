/* Customer workflow adapter. Existing app.js remains the primary implementation. */
window.SmartCafeCustomer = {
  menu: () => window.SmartCafeData ? window.SmartCafeData.menu.slice() : [],
  table: () => window.SmartCafeCommon ? window.SmartCafeCommon.getTable() : '04',
  cart: () => window.SmartCafeCommon ? window.SmartCafeCommon.getCart() : [],
  placeOrder: () => window.SmartCafeCommon ? window.SmartCafeCommon.createOrder() : null
};
