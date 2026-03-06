"use client";

import Image from "next/image";
import { Product } from "../../model/types";
import { ToggleFavorite } from "@/features/toggle-favorite";
import { AddToCart } from "@/features/add-to-cart";
import "./style.css";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="product-card">
      {/* IMAGE */}
      <div className="product-image">
        <Image
          src={product.image}
          alt={product.nameRu || product.title || "Product"}
          fill
          className="img"
        />
        
        {/* Heart Button */}
        <ToggleFavorite productId={product.id} />

        {/* Color Dots */}
        {product.hasColors && (
          <div className="color-dots">
            <span className="dot dot-1"></span>
            <span className="dot dot-2"></span>
            <span className="dot dot-3"></span>
          </div>
        )}
      </div>

      {/* TEXT */}
      <div className="product-info">
        <h2>{product.name || product.title}</h2>
        <h3 className="product-name">{product.nameRu || product.description}</h3>
        <p className="product-price">{product.price}</p>
        <AddToCart product={product} />
      </div>
    </div>
  );
}

