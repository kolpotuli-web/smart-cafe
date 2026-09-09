/* Shared browser-only data helpers for the SmartCafe frontend prototype. */
window.SmartCafeCommon = {
  getTable() {
    const params = new URLSearchParams(window.location.search);
    const table = params.get('table') || localStorage.getItem('smartCafeTable') || '04';
    localStorage.setItem('smartCafeTable', table);
    return table;
  },
  getCart() {
    try { return JSON.parse(localStorage.getItem('smartCafeCart') || '[]'); } catch { return []; }
  },
  setCart(cart) { localStorage.setItem('smartCafeCart', JSON.stringify(cart)); },
  cartCount(cart = this.getCart()) { return cart.reduce((sum, item) => sum + Number(item.quantity || 0), 0); },
  itemUnitPrice(item) {
    let price = Number(item.price || 0);
    if (item.size === 'Medium') price += 20;
    if (item.size === 'Large') price += 40;
    (item.extras || []).forEach(extra => { price += Number(extra.price || 0); });
    return price;
  },
  cartTotal(cart = this.getCart()) { return cart.reduce((sum, item) => sum + this.itemUnitPrice(item) * Number(item.quantity || 0), 0); },
  createOrder(cart = this.getCart()) {
    const order = {
      id: `SC${Date.now().toString().slice(-6)}`,
      table: this.getTable(),
      items: cart.map(item => ({ name: item.name, quantity: Number(item.quantity || 1), size: item.size || 'Small', extras: item.extras || [], instructions: item.instructions || '', unitPrice: this.itemUnitPrice(item), lineTotal: this.itemUnitPrice(item) * Number(item.quantity || 1) })),
      total: this.cartTotal(cart),
      status: 'ORDER RECEIVED',
      createdAt: new Date().toISOString()
    };
    const orders = JSON.parse(localStorage.getItem('smartCafeOrders') || '[]');
    orders.unshift(order);
    localStorage.setItem('smartCafeOrders', JSON.stringify(orders));
    this.setCart([]);
    localStorage.setItem('smartCafeLastOrderId', order.id);
    return order;
  }
};
