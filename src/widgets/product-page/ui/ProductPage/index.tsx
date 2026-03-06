"use client";
import Link from "next/link";
import Image from "next/image";
import "./style.css";
import cartPage from "@/shared/assets/img/cartPage/img1.png"
import love from "@/shared/assets/icons/cartPage/love.svg"
import pvo from "@/shared/assets/icons/cartPage/pvo.svg"
import { Product } from "@/entities/product/model/types";
import { AddToCartButton } from "@/features/add-to-cart/ui/AddToCartButton";

interface ProductPageProps {
  product?: Product;
}

export default function ProductPage({ product }: ProductPageProps) {
  console.log('ProductPage received product:', product);
  // Если товар передан, используем его данные, иначе показываем статичный контент
  const displayProduct = product || {
    id: 2,
    title: "TOWEL WITH LINEN APPLIQUÉ",
    description: "Льняное махровое полотенце",
    price: "11 540 ₽",
    image: cartPage.src
  };
  console.log('Using displayProduct:', displayProduct);
  return (
    <section className="product-page">
      {/* LEFT SIDEBAR */}
      <aside className="catalog-sidebar">
        <h4 className="sidebar-title">Каталог товаров</h4>

        <ul className="sidebar-list">
          {[
            "Спальня",
            "Одежда и обувь",
            "Жилая комната",
            "Столовая",
            "Кухня",
            "Ванная комната",
            "Экстра",
            "Ароматы для дома",
            "Детская",
            "Домашние животные",
          ].map((item) => (
            <li key={item} className="sidebar-item">
              {item}
            </li>
          ))}
        </ul>
      </aside>

      {/* MAIN CONTENT */}
      <div className="product-content">
        {/* BREADCRUMBS */}
        <div className="breadcrumbs">
          <Link href="/catalog">Каталог товаров</Link> /
          <Link href="/catalog/bathroom">Ванная комната</Link> /
          <Link href="/catalog/bathroom/accessories">Аксессуары</Link> /
          <b>Все</b>
        </div>

        <h1 className="product-title">{displayProduct.title}</h1>
        <p className="product-subtitle">{displayProduct.description}</p>

        <div className="product-grid">
          {/* IMAGE */}
          <div className="product-image">
            <Image
              src={displayProduct.image}
              alt={displayProduct.title}
              width={520}
              height={640}
            />

            <div className="dots">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} />
              ))}
            </div>


          </div>

          {/* INFO */}
          <div className="product-info">
            <div className="option">
              <span>Выберите цвет</span>

              <div className="colors">
                <span className="color color-1" />
                <span className="color color-2" />
                <span className="color color-3" />
                <span className="color color-4" />
              </div>
            </div>


            <div className="option">
              <span className="option-title">Выберите размер</span>

              <select className="size-select">
                <option>БАННОЕ (90×150 см) 11 540 ₽</option>
                <option>СРЕДНЕЕ (70×140 см) 9 540 ₽</option>
                <option>МАЛОЕ (50×90 см) 7 540 ₽</option>
              </select>
            </div>


            <div className="price">{displayProduct.price}</div>

            <div className="actions">
              <button className="fav"><img src={love.src} alt="" /></button>
              <AddToCartButton product={displayProduct} />
            </div>

            <p className="delivery">
              <img src={pvo.src} alt="logo" className="delivery-icon" />
              <span>
                Ориентировочная дата доставки:
                <br />
                <b>16 АВГУСТА 2023</b>
              </span>
            </p>


            <div className="details">
              <div className="details-row">
                <span className="details-title">Состав</span>
                <span className="details-value">96% Хлопок, 4% Лайкра</span>
              </div>

              <div className="details-row">
                <span className="details-title">Заголовок</span>
                <span className="details-value">
                  Содержимое 1 &nbsp;&nbsp; Содержимое 2
                </span>
              </div>

              <div className="details-row">
                <span className="details-title">Заголовок</span>
                <span className="details-value">
                  Содержимое 3, достаточно объемное в несколько строк
                </span>
              </div>
            </div>



            <div className="description">

              <h3>Описание</h3>

              <p>
                Хлопковое махровое полотенце с льняной аппликацией по краю.
                Доступен в двух цветах.
              </p>

              <p>
                Lorem Ipsum — это текст «рыба», часто используемый в печати и веб-дизайне.
                Lorem Ipsum является стандартной «рыбой» для текстов на латинице
                с начала XVI века.
              </p>

              <p>
                Хлопковое махровое полотенце с льняной аппликацией по краю.
                Доступен в двух цветах.
              </p>

              <p>
                Lorem Ipsum — это текст «рыба», часто используемый в печати и веб-дизайне.
                Lorem Ipsum является стандартной «рыбой» для текстов на латинице
                с начала XVI века.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
