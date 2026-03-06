"use client";

import { Category } from "@/entities/category/model/types";
import { CategoryCard } from "@/entities/category/ui/CategoryCard";
import "./style.css";

interface CatalogGridProps {
  categories: Category[];
}

export function CatalogGrid({ categories }: CatalogGridProps) {
  return (
    <section className="catalog-section">
      <h2 className="catalog-title">Каталог товаров</h2>
      <div className="catalog-grid">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
}














