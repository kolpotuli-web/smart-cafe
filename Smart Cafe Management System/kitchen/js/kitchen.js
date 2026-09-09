/* Kitchen-side browser helpers for the frontend prototype. */
window.SmartCafeKitchen = {
  getOrders() { try { return JSON.parse(localStorage.getItem('smartCafeOrders') || '[]'); } catch { return []; } },
  update(id, status) { const orders=this.getOrders(); const order=orders.find(o=>o.id===id); if(!order)return false; order.status=status; localStorage.setItem('smartCafeOrders',JSON.stringify(orders)); return true; }
};
