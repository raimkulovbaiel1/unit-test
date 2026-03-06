"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/entities/product/model/types";
import { AddToCartButton } from "@/features/add-to-cart/ui/AddToCartButton";
import "./style.css";

export default function NewArrivalsPage() {
  const [newProducts, setNewProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNewProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:3003/products");

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const allProducts = await response.json();

        // Сортируем по id (предполагаем, что большие id - более новые товары)
        // и берем последние 12 товаров
        const sortedProducts = allProducts.sort((a: Product, b: Product) => b.id - a.id);
        const newestProducts = sortedProducts.slice(0, 12);

        setNewProducts(newestProducts);
      } catch (err) {
        console.error("Error fetching new products:", err);
        setError("Не удалось загрузить новинки. Попробуйте позже.");
      } finally {
        setLoading(false);
      }
    };

    fetchNewProducts();
  }, []);

  if (loading) {
    return (
      <div className="new-arrivals-page">
        <div className="container">
          <div className="loading">
            <div
              data-testid="error-message"
              className="loading-spinner"></div>
            <p>Загружаем новинки...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="new-arrivals-page">
        <div className="container">
          <div
            data-testid="error"
            className="error">
            <h1>Новинки</h1>
            <p>{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="retry-btn"
            >
              Попробовать снова
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="new-arrivals-page">
      <div className="container">
        {/* Header */}
        <div className="page-header">
          <h1>Новинки</h1>
          <p className="page-subtitle">
            Самые свежие поступления в наш магазин
          </p>
        </div>

        {/* Products Grid */}
        {newProducts.length > 0 ? (
          <div className="products-grid">
            {newProducts.map((product) => (
              <div key={product.id} className="product-card">
                <div
                  className="product-badge">NEW</div>

                <Link href={`/product/${product.id}`} className="product-image-link">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={300}
                    height={300}
                    className="product-image"
                    priority={product.id <= 4} // Приоритетная загрузка для первых 4 товаров
                  />
                </Link>

                <div className="product-info">
                  <Link
                    data-testid={`product-title-${product.id}`}
                    href={`/product/${product.id}`} className="product-title-link">
                    <h3 className="product-title">{product.title}</h3>
                  </Link>

                  <p className="product-description">{product.description}</p>

                  <div className="product-footer">
                    <span 
                    data-testid="price"
                    className="product-price">{product.price}</span>
                    <AddToCartButton product={product} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-products">
            <h2>Новинок пока нет</h2>
            <p>Следите за обновлениями - скоро добавим новые товары!</p>
            <Link href="/Catalog" className="catalog-link">
              Посмотреть все товары
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}