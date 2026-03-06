"use client";

import "./style.css";

export function OrdersContent() {
  return (
    <main className="orders-content">
      <h1 className="orders-title">Мои заказы</h1>

      <div className="order-card">
        <div className="order-head">
          <span>№ 356 765 00</span>
          <span>Сформирован: 20.07.2023 16:41</span>
          <span className="status waiting">ожидает оплаты</span>
          <span><b>162 765 ₽</b></span> 
        </div> 
        
      </div>
      <div className="order-card">
        <div className="order-head">
          <span>№ 356 765 00</span>
          <span>Сформирован: 20.07.2023 16:41</span>
          <span className="status waiting">ожидает оплаты</span>
          <span><b>162 765 ₽</b></span> 
        </div>
      </div>
      <div className="order-card">
        <div className="order-head">
          <span>№ 356 765 00</span>
          <span>Сформирован: 20.07.2023 16:41</span>
          <span className="status waiting">ожидает оплаты</span>
          <span><b>162 765 ₽</b></span> 
        </div>
      </div>
    </main>
  );
}
