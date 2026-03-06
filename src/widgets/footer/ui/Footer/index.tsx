"use client";

import "./style.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">О компании</h3>
            <ul className="footer-links">
              <li><a href="/about">О нас</a></li>
              <li><a href="/careers">Карьера</a></li>
              <li><a href="/press">Пресса</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="footer-title">Помощь</h3>
            <ul className="footer-links">
              <li><a href="/shipping">Доставка</a></li>
              <li><a href="/returns">Возвраты</a></li>
              <li><a href="/faq">FAQ</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="footer-title">Контакты</h3>
            <ul className="footer-links">
              <li>8 (800) 000 80 00</li>
              <li>info@zarahome.ru</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 ZARA HOME. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}














