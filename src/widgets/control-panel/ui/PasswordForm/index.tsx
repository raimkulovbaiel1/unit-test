"use client";

import "./style.css";

export function PasswordForm() {
  return (
    <main className="password-content">
      <h1 className="password-title">Смена пароля</h1>

      <div className="mini-password"> Новый пароль </div>
      <div className="password-card">
        <div className="input-group">
          <label>Текущий пароль</label>
          <input type="password" placeholder="Введите текущий пароль" />
        </div>

        <div className="input-group">
          <label>Новый пароль</label>
          <input type="password" placeholder="Введите новый пароль" />
        </div>

        <div className="input-group">
          <label>Повторите новый пароль</label>
          <input type="password" placeholder="Повторите новый пароль" />
        </div>

        <button className="save-btn">Сохранить изменения</button>
      </div>
    </main>
  );
}
