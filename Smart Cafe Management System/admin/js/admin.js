/* Admin-side browser data helpers. */
window.SmartCafeAdmin = {
  getOrders() { try { return JSON.parse(localStorage.getItem('smartCafeOrders') || '[]'); } catch { return []; } },
  summary() { const orders=this.getOrders(); return { total: orders.length, active: orders.filter(o=>o.status!=='COMPLETED').length, value: orders.reduce((sum,o)=>sum+Number(o.total||0),0) }; }
};
