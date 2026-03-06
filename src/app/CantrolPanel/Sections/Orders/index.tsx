
"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./style.css"; 

 import Home from "@/shared/assets/icons/ControlPanel/Home.svg"

export default function OrdersPage() {
  const pathname = usePathname();
  return (
    <section className="orders">
      <div className="link">
        <Link href="#">
          <img src={Home.src} alt="logo" />
          ЛИЧНЫЙ КАБИНЕТ
        </Link>
      </div>
      <div className="orders-container">
        <aside className="orders-sidebar">
          <ul>
            <li className={pathname?.includes("/orders") ? "active" : ""}>
              <Link href="/CantrolPanel/Sections/orders">Мои заказы</Link>
            </li>

            <li className={pathname?.includes("/password") ? "active" : ""}>
              <Link href="/CantrolPanel/Sections/password">Сменить пароль</Link>
            </li>
            <li className={pathname?.includes("/email") ? "active" : ""}>
              <Link href="/CantrolPanel/Sections/email">Сменить E-mail</Link>
            </li>
          </ul>
        </aside>

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
      </div>
    </section>
  );
}
