"use client";
import Link from "next/link";
import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import "./style.css";


export interface category {
  key: string;
  title: string;
  groups?: {
    items: any;
    title: string;
    item: string;
  }[];
}


import { Product } from "@/entities/product/model/types";
import { AddToCartButton } from "@/features/add-to-cart/ui/AddToCartButton";

import LogoIcon from "@/shared/assets/icons/catalovV3/icons.svg";
import TimeIcon from "@/shared/assets/icons/catalovV3/Time.svg";
import cart from "@/shared/assets/icons/catalovV3/cart.svg";

  function CatalogPage() {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [openCategory, setOpenCategory] = useState<string | null>("bedroom");
  const [categories, setcategories] = useState<category[]>([])
  const searchParams = useSearchParams();
  const searchQuery = searchParams?.get('search') || '';

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:3003/products");
        const data = await res.json();
        setAllProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  // Фильтруем товары при изменении поискового запроса
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredProducts(allProducts);
    } else {
      const filtered = allProducts.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [searchQuery, allProducts]);


  useEffect(() => {
    fetch("http://localhost:3003/categories")
      .then(res => res.json())
      .then(setcategories);
  }, []);
  const toggleCategory = (key: string) => {
    setOpenCategory(openCategory === key ? null : key);
  };  

  return (
    <div className="catalog-layout">

      {/* SIDEBAR */}
      <aside className="sidebar">
        <h3 
        data-testid="sidebar-title"
        className="sidebar-title">Каталог товаров</h3>
        <ul className="sidebar-list">
          {categories.map(cat => (
            <li key={cat.key} className="sidebar-item">
              <button 
              data-testid={`category-button-${cat.key}`}
                className="sidebar-btn"
                onClick={() => toggleCategory(cat.key)}
              >
                {cat.title} 
                
              </button>
              {openCategory === cat.key && cat.groups && (
                <div className="sidebar-content">
                  {cat.groups.map((group, i) => (
                    <ul key={i} className="sidebar-sublist">
                      <li className="sub-title">{group.title}</li>
                      {group.items.map((item: boolean | Key | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined, index: number) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </aside>

      {/* CONTENT */}
      <main 
       data-testid="catalog-component"
       className="catalog-content">
        {/* HEADER */}
        <div  
         data-testid="catalog-header"
         className="catalog-header">
          <h1>
            {searchQuery ? `Результаты поиска: "${searchQuery}"` : 'ВАННАЯ КОМНАТА'}
          </h1>

          <div className="catalog-sort">
            <img src={LogoIcon.src} alt="logo" />
            <span>Сначала дешевые</span>
            <img src={TimeIcon.src} alt="timer" />
            <span>Добавлены позже</span>
          </div>
        </div>

        {/* PRODUCTS */}
        <div className="products-grid" data-testid="products-grid">
          {filteredProducts.map((p) => (
            <div key={p.id} className="product-card" data-testid="product-card">
              <Link href={`/product/${p.id}`}> 
                <img src={typeof p.image === 'string' ? p.image : p.image.src} alt={String(p.title) || "product"} />
                <h4>{p.title}</h4>
                <p className="product-description">{p.description}</p>
                <p className="price">{p.price}</p>
              </Link>

              <AddToCartButton product={p} />
            </div>
          ))}
        </div>

      </main>
    </div>
  );
}
 
export default CatalogPage;