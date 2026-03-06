"use client";
import Link from "next/link";
import Image from "next/image"; 
import './style.css';
import { useEffect, useState } from 'react';
import { Product } from '@/entities/product/model/types';
import { AddToCartButton } from '@/features/add-to-cart/ui/AddToCartButton';
import love from "@/shared/assets/icons/cartPage/love.svg";
import pvo from "@/shared/assets/icons/cartPage/pvo.svg";

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:3003/products/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product');
        }
        const productData = await response.json();
        setProduct(productData);
      } catch (error) {
        console.error('Error fetching product:', error);
        // Fallback to mock data if JSON server is not running
        const mockProducts: { [key: string]: Product } = {
          '1': {
            id: 1,
            title: "ROUND BASKET",
            description: "Плетеная джутовая корзина",
            price: "2 840 ₽",
            image: "https://basket-16.wbcontent.net/vol2450/part245096/245096303/images/big/1.webp",
            category: "bathroom"
          },
          '2': {
            id: 2,
            title: "LEATHER STOOL",
            description: "Кожаный стул",
            price: "3 120 ₽",
            image: "https://basket-16.wbcontent.net/vol2445/part244534/244534563/images/big/1.webp",
            category: "bathroom"
          }
        };

        if (mockProducts[id]) {
          setProduct(mockProducts[id]);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

 if (loading) {
  return <div data-testid="loading">Загрузка...</div>;
}

if (!product) {
  return <div data-testid="not-found">Товар не найден</div>;
}

  return (
    <section className="product-page">
      {/* LEFT SIDEBAR */}
      <aside className="catalog-sidebar">
        <h4 
         data-testid="sidebar-title"
         className="sidebar-title">Каталог товаров</h4>

        <ul  
        data-testid="sidebar-list"
        className="sidebar-list">
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

      <div className="product-content">
        <div  
        data-testid="breadcrumbs"
        className="breadcrumbs">
          <Link href="/catalog">Каталог товаров</Link> /
          <Link href="/catalog/bathroom">Ванная комната</Link> /
          <Link href="/catalog/bathroom/accessories">Аксессуары</Link> /
          <b>Все</b>
        </div>

        <h1 className="product-title">{product.title}</h1>
        <p className="product-subtitle">{product.description}</p>

        <div className="product-grid">
          <div className="product-image">
            <Image
              src={product.image}
              alt={product.title}
              width={520}
              height={640}
            />

            <div className="dots">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} />
              ))}
            </div>
          </div>

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
            {/* этот надо проверить */}
            <div className="price">{product.price}</div>

            <div className="actions" data-testid="actions">
              <button className="fav" data-testid="fav-button">
                <img src={love.src} alt="" />
              </button>

              <AddToCartButton data-testid="add-to-cart" product={product} />
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
