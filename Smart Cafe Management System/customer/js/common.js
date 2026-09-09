/* Shared browser-only data helpers for the SmartCafe frontend prototype. */
window.SmartCafeCommon = {
  getTable() {
    const params = new URLSearchParams(window.location.search);
    let table = params.get('table') || localStorage.getItem('smartCafeTable') || '04';
    table = String(table).trim() || '04';
    localStorage.setItem('smartCafeTable', table);
    return table;
  },
  getCart() {
    try {
      const cart = JSON.parse(localStorage.getItem('smartCafeCart') || '[]');
      return Array.isArray(cart) ? cart : [];
    } catch {
      return [];
    }
  },
  setCart(cart) {
    localStorage.setItem('smartCafeCart', JSON.stringify(Array.isArray(cart) ? cart : []));
  },
  getOrders() {
    try {
      const orders = JSON.parse(localStorage.getItem('smartCafeOrders') || '[]');
      return Array.isArray(orders) ? orders : [];
    } catch {
      return [];
    }
  },
  cartCount(cart = this.getCart()) {
    return cart.reduce((sum, item) => sum + Math.max(0, Number(item.quantity) || 0), 0);
  },
  itemUnitPrice(item) {
    let price = Number(item && item.price);
    const menu = window.SmartCafeData && Array.isArray(window.SmartCafeData.menu)
      ? window.SmartCafeData.menu
      : [];
    const menuItem = menu.find(menuEntry => String(menuEntry.id) === String(item && item.id));

    if (!Number.isFinite(price) || price < 0) {
      price = menuItem ? Number(menuItem.price) : Number(item && item.unitPrice);
    }
    if (!Number.isFinite(price) || price < 0) price = 0;

    const size = String(item && item.size || 'Regular');
    let sizeCharge;
    if (menuItem && Array.isArray(menuItem.sizes)) {
      const sizeOption = menuItem.sizes.find(option => String(option[0]) === size);
      sizeCharge = sizeOption ? Number(sizeOption[1]) : 0;
    } else {
      sizeCharge = size === 'Medium' ? 20 : size === 'Large' ? 40 : 0;
    }
    if (Number.isFinite(sizeCharge) && sizeCharge > 0) price += sizeCharge;

    (item && Array.isArray(item.extras) ? item.extras : []).forEach(extra => {
      const extraPrice = Number(extra && extra.price);
      if (Number.isFinite(extraPrice) && extraPrice > 0) price += extraPrice;
    });

    return price;
  },
  cartTotal(cart = this.getCart()) {
    return cart.reduce((sum, item) => {
      const quantity = Math.max(1, Number(item && item.quantity) || 1);
      return sum + this.itemUnitPrice(item) * quantity;
    }, 0);
  },
  createOrder(cart = this.getCart()) {
    const safeCart = Array.isArray(cart) ? cart : [];
    const order = {
      id: `SC${Date.now().toString().slice(-6)}`,
      table: this.getTable(),
      items: safeCart.map(item => {
        const quantity = Math.max(1, Number(item.quantity) || 1);
        const unitPrice = this.itemUnitPrice(item);
        return {
          name: item.name || 'Menu Item',
          quantity,
          size: item.size || 'Regular',
          extras: Array.isArray(item.extras) ? item.extras : [],
          instructions: item.instructions || '',
          unitPrice,
          lineTotal: unitPrice * quantity
        };
      }),
      total: this.cartTotal(safeCart),
      status: 'ORDER RECEIVED',
      createdAt: new Date().toISOString()
    };

    const orders = this.getOrders();
    orders.unshift(order);
    localStorage.setItem('smartCafeOrders', JSON.stringify(orders));
    this.setCart([]);
    localStorage.setItem('smartCafeLastOrderId', order.id);
    return order;
  }
};
