"use client";
import { useCartStore } from "@/store/cart";
import Link from "next/link";
import "./style.css";

export default function CartPage() {
  const { items, updateQuantity, removeItem, getTotalItems, getTotalPrice } = useCartStore();

  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice();

  if (items.length === 0) {
    return (
      <section className="cart">
        <div className="cart-container">
          <div className="cart-left">
            <h1  
             data-testid="empty-cart-title"
             className="cart-title">В ВАШЕЙ КОРЗИНЕ</h1>
            <p className="empty-cart">Корзина пуста</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="cart">
      <div className="cart-container">
        <div className="cart-left">
          <h1 
          data-testid="title"
          className="cart-title">В ВАШЕЙ КОРЗИНЕ</h1>

          <div className="cart-list">
            {items.map((item) => (
              <div className="cart-item" key={item.product.id}>
                <img
                  src={typeof item.product.image === 'string' ? item.product.image : '/img/product.png'}
                  alt={String(item.product.title) || "product"}
                  className="cart-item-img"
                />

                <div className="cart-item-info">
                  <h3>{item.product.title}</h3>
                  <p>{item.product.description}</p>
                </div>

                <div className="cart-item-actions">
                  <button 
                    data-testid="decrease-btn"
                    onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>

                <div className="cart-item-price">{item.product.price}</div>

                <button
                  className="cart-item-remove"
                  onClick={() => removeItem(item.product.id)}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>

       
        <aside className="cart-summary">
          <p className="summary-title">Итого</p>
          <p className="summary-price">{totalPrice.toLocaleString()} ₽</p>
          <p 
           data-testid="total-items"
           className="summary-count">{totalItems} товаров</p>
          <Link href="/Offer" className="checkout-link">
            <button 
            data-testid="checkout-btn"
            className="checkout-btn">
              Перейти к оформлению
            </button>
          </Link>

        </aside>
      </div>
    </section>
  );
}
