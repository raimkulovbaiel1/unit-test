"use client";

import "./style.css";
 
import img1 from "@/shared/assets/img/cataloV3/img1.png";
import img2 from "@/shared/assets/img/cataloV3/img2.png"; 
import img3 from "@/shared/assets/img/cataloV3/img1.png";
import img4 from "@/shared/assets/img/cataloV3/img2.png"; 
import img5 from "@/shared/assets/img/cataloV3/img1.png";
import img6 from "@/shared/assets/img/cataloV3/img2.png";
 

import LogoIcon from "@/shared/assets/icons/catalovV3/icons.svg";
import TimeIcon from "@/shared/assets/icons/catalovV3/Time.svg";
import DashboardIcon from "@/shared/assets/icons/catalovV3/darhboard.svg";
import cart from "@/shared/assets/icons/catalovV3/cart.svg";  


import { LogOutIcon } from "lucide-react";
import { describe } from "node:test";


const products = [
  { id: 1, title: "ROUND BASKET", describe: "Плетеная джутовая корзина", price: "2 840 ₽", image: img1.src },
  { id: 2, title: "LEATHER STOOL", describe: "Кожаный стул", price: "3 120 ₽", image: img2.src },
  { id: 3, title: "UPHOLSTERED BOUCLÉ", describe: "Кресло для отдыха", price: "11 540 ₽", image: img3.src },
  { id: 4, title: "ROUND BASKET", describe: "Плетеная джутовая корзина", price: "2 840 ₽", image: img4.src },
  { id: 5, title: "LEATHER STOOL", describe: "Плетеная джутовая корзина", price: "3 120 ₽", image: img5.src },
  { id: 6, title: "UPHOLSTERED BOUCLÉ", describe: "Плетеная джутовая корзина", price: "11 540 ₽", image: img6.src },
];

export default function CatalogPage() {
  return (
    <div className="catalog-layout">

      {/* SIDEBAR */}
      <aside className="sidebar">
        <h3 className="sidebar-title">Каталог товаров</h3>

        <ul className="sidebar-list">

          <li className="sidebar-item active">
            <span className="toggle">▾</span> Спальня

            <ul className="sidebar-sublist tree">
              <li className="sub-title">ПОСТЕЛЬНОЕ БЕЛЬЕ</li>
              <li>Смотреть все</li>
              <li className="active-link">Основное постельное белье</li>
              <li>Пододеяльники</li>
              <li>Наволочки</li>
              <li>Плоские простыни</li>
            </ul>

            <ul className="sidebar-sublist">
              <li className="sub-title">НАПОЛНИТЕЛИ И ПРОТЕКТОРЫ</li>
              <li className="bold">БЕСПРИНАДЫ</li>
              <li>КВИЛТЫ</li>
              <li>БЛАНКЕТЫ</li>
            </ul>

            <ul className="sidebar-sublist">
              <li className="bold">ПОДШИПНИКИ</li>
              <li className="bold">МЕБЕЛЬ</li>
              <li className="bold">РУГИ</li>
              <li>ЗЕРКАЛА</li>
              <li className="bold">ОСВЕЩЕНИЕ</li>
            </ul>
          </li>

          <li className="sidebar-item">Одежда и обувь</li>
          <li className="sidebar-item">Жилая комната</li>
          <li className="sidebar-item">Столовая</li>
          <li className="sidebar-item">Кухня</li>
          <li className="sidebar-item">Ванная комната</li>
          <li className="sidebar-item">Экстра</li>
          <li className="sidebar-item">Ароматы для дома</li>
          <li className="sidebar-item">Детская</li>
          <li className="sidebar-item">Домашние животные</li>

        </ul>
      </aside>

      {/* CONTENT */}
      <main className="catalog-content">
      
        {/* HEADER */}
        <div className="catalog-header">
          <h1>ВАННАЯ КОМНАТА</h1>

          <div className="catalog-sort"> 
            <img src={LogoIcon.src} alt="logo" />
            <span>Сначала дешевые</span> 
            <img src={TimeIcon.src}alt="taimer" />
            <span>Добавлены позже</span> 
            <img src={DashboardIcon.src} alt="pizda" />
          </div>
        </div>

        {/* PRODUCTS */}
        <div className="products-griы">
          {products.map((p) => (
            <div key={p.id} className="product-card">
              <img src={p.image} alt={p.title} /> 
             
              <h4>{p.title}</h4> 
               <p className="product-description">{p.describe}</p>
              <p className="price">{p.price}</p>
              <button>  в корзину
                <img src={cart.src} alt="cart" className="cart-icon" /> 
                
              </button>
            </div>
          ))}
        </div>

      </main>
    </div>
  );
}
