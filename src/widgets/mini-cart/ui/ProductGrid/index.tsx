"use client";

import { Product } from "@/entities/product/model/types";
import { ProductCard } from "@/entities/product/ui/ProductCard";
import "./style.css";

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="product-grid-container"> 
    
      <div className="product-grid"> 
         {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}













