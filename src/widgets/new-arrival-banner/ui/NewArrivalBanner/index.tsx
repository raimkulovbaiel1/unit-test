"use client";

import "./style.css";
import img1 from "@/shared/assets/img/Hero/imge1.png";

export function NewArrivalBanner() {
  return (
    <section className="new-arrival-banner">
      <div className="content banner-image">
        <img className="banner-img" src={img1.src} alt="logo" />

        <div className="text-box">
          <h2 className="title">Новое поступление</h2>
          <p className="subtitle">Коллекция этого сезона</p>
          <button className="btn">Смотреть все новинки</button>
        </div>
      </div>
    </section>
  );
}














