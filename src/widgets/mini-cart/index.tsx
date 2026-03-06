"use client";

import { ProductGrid } from "./ui/ProductGrid";
import { Product } from "@/entities/product/model/types";
import ima2 from "@/shared/assets/img/MinICart/ima2.png";
import img3 from "@/shared/assets/img/MinICart/img3.png";
import imga1 from "@/shared/assets/img/MinICart/imga1.png";
import imga4 from "@/shared/assets/img/MinICart/imga4.png";

const products: Product[] = [
  {
    id: 1,
    title: "Round Basket",
    description: "Плетеная джутовая корзина",
    name: "Round Basket",
    nameRu: "Плетеная джутовая корзина",
    price: "2 840 ₽",
    image: ima2,
    hasColors: true,
  },
  {
    id: 2,
    title: "Leather Stool",
    description: "Кожаный стул",
    name: "Leather Stool",
    nameRu: "Кожаный стул",
    price: "3 120 ₽",
    image: img3,
  },
  {
    id: 3,
    title: "Upholstered Bouclé",
    description: "Кресло для отдыха",
    name: "Upholstered Bouclé",
    nameRu: "Кресло для отдыха",
    price: "11 540 ₽",
    image: imga1,
  },
  {
    id: 4,
    title: "Upholstered Bouclé",
    description: "Кресло для отдыха",
    name: "Upholstered Bouclé",
    nameRu: "Кресло для отдыха",
    price: "11 540 ₽",
    image: imga4,
  },
];

export default function MiniCart() {
  return <ProductGrid products={products} />;
}













