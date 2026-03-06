"use client"; 
import "./style.css";

export function EmailForm() {
  return (
    <main className="orders-content">
      <h1 className="email-title">Смена E-mail</h1>

      <div className="email-card">
        <div className="input-group">
          <label>Текущий E-mail</label>
          <input type="email" placeholder="Введите текущий E-mail" />
        </div>

        <div className="input-group">
          <label>Новый E-mail</label>
          <input type="email" placeholder="Введите новый E-mail" />
        </div>

        <button className="save-btn">Сохранить изменения</button>
      </div>
    </main>
  );
}






