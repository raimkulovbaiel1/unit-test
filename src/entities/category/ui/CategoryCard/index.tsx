"use client";

import Image from "next/image";
import { Category } from "../../model/types";
import "./style.css";

interface CategoryCardProps {
  category: Category;
  onClick?: () => void;
}

export function CategoryCard({ category, onClick }: CategoryCardProps) {
  return (
    <div className="catalog-card" onClick={onClick}>
      <Image src={category.image} alt={category.title} className="catalog-img" />
      <div className="catalog-text-box">
        <h3 className="catalog-name">{category.title}</h3>
        <p className="catalog-subtitle">{category.subtitle}</p>
      </div>
    </div>
  );
}














