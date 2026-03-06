"use client";

import Image from "next/image";
import { Product } from "@/entities/product/model/types";
import { useCartStore } from "@/store/cart";
import bagIcon from "@/shared/assets/icons/MiniCart/bagIcon.svg";
import "./style.css";

interface AddToCartButtonProps {
  product: Product;
  onClick?: () => void;
}

export function AddToCartButton({ product, onClick }: AddToCartButtonProps) {
  const addItem = useCartStore((state) => state.addItem);

  const handleClick = () => {
    console.log('Adding product to cart:', product);
    addItem(product);
    console.log('Product added successfully');
    onClick?.();
  };

  return (
    <button className="add-btn" onClick={handleClick}>
      <Image src={bagIcon.src} alt="Корзина" className="bag-icon" width={20} height={20} />
      В корзину
    </button>
  );
}












