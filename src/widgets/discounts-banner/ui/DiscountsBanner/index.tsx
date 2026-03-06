"use client";

import "./style.css";
import img1 from "@/shared/assets/img/Hero/imge1.png";

export function DiscountsBanner() {
  return (
    <section className="discounts-banner">
      <div className="discounts-content banner-image">
        <img className="discounts-img" src={img1.src} alt="discounts" />

        <div className="discounts-text-box">
          <h2 className="discounts-title">Скидки сезона</h2>
          <p className="discounts-subtitle">Лучшие предложения этого месяца</p>
          <button className="discounts-btn">Посмотреть все скидки</button>
        </div>
      </div>
    </section>
  );
}














