"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Heart, Search, ShoppingBag, User } from "lucide-react";
import { useCartStore } from "@/store/cart";
import logotip from "@/shared/assets/icons/Header/logotip.svg";
import "./style.css";

interface Product {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNewDropdownOpen, setIsNewDropdownOpen] = useState(false);
  const [newProducts, setNewProducts] = useState<Product[]>([]);
  const { getTotalItems, getTotalPrice } = useCartStore();

  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice();

  useEffect(() => {
    const fetchNewProducts = async () => {
      try {
        const res = await fetch("http://localhost:3003/products");
        const allProducts = await res.json();
        setNewProducts(allProducts.slice(0, 4));
      } catch (error) {
        console.error("Error fetching new products:", error);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest(".new-dropdown") && !target.closest(".new-link")) {
        setIsNewDropdownOpen(false);
      }
    };

    fetchNewProducts();
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header className="header">
        <div className="header-top">
          <div className="header-container">
            <button
              className={`burger-btn ${isMenuOpen ? "open" : ""}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Открыть меню"
            >
              <span />
              <span />
              <span />
            </button>

            <div className="header-logo">
              <Link href="/">
                <img src={logotip.src} alt="Logo" />
              </Link>
            </div>


            <div className="header-icons">
              <button aria-label="Профиль">
                <User />
              </button>
              <button aria-label="Избранное">
                <Heart />
              </button>

            </div>

            <div className="header-mobile">
              <Link href="/CartPage" className="header-cart">
                <ShoppingBag />
                {totalItems > 0 && (
                  <span className="header-cart-badge">{totalItems}</span>
                )}
              </Link>
            </div>
          </div>
        </div>

        <nav
          data-testid="header-component"
          className="header-nav">
          <ul
            data-testid="header-menu"
            className="header-menu">
            <li>
              <Link href="/Catalog">Все товары</Link>
            </li>
            <li>
              <Link href="/sale">Скидки</Link>
            </li>
            <li className="new-dropdown-container">
              <button
                data-testid="new-button"
                className="new-link"
                onClick={() => setIsNewDropdownOpen(!isNewDropdownOpen)}
              >
                Новинки
              </button>

              {isNewDropdownOpen && (
                <div data-testid="new-dropdown" className="new-dropdown">
                  <div className="new-dropdown-header">
                    <h3>Новые поступления</h3>
                    <Link href="/new" data-testid="new-see-all" className="new-dropdown-see-all">
                      Смотреть все
                    </Link>
                  </div>

                  <div data-testid="new-products" className="new-dropdown-products">
                    {newProducts.map((product) => (
                      <Link
                        key={product.id}
                        href={`/product/${product.id}`}

                        data-testid={`new-product-${product.id}`}
                        className="new-dropdown-product"
                        onClick={() => setIsNewDropdownOpen(false)}
                      >
                        <img src={product.image} alt={product.title} />
                        <div className="new-dropdown-product-info">
                          <div className="new-dropdown-product-title">{product.title}</div>
                          <div className="new-dropdown-product-price">{product.price}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
            <li>
              <Link href="/info">Информация</Link>
            </li>
          </ul>
        </nav>
      </header>

      {isMenuOpen && (
        <div className="menu-backdrop" onClick={() => setIsMenuOpen(false)} />
      )}

      <nav className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setIsMenuOpen(false)}>
          ✕
        </button>

        <ul className="mobile-menu-list">
          <li>
            <Link href="/Catalog" onClick={() => setIsMenuOpen(false)}>
              Все товары
            </Link>
          </li>
          <li>
            <Link href="/sale" onClick={() => setIsMenuOpen(false)}>
              Скидки
            </Link>
          </li>
          <li>
            <Link href="/new" onClick={() => setIsMenuOpen(false)}>
              Новинки
            </Link>
          </li>
          <li>
            <Link href="/info" onClick={() => setIsMenuOpen(false)}>
              Информация
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
