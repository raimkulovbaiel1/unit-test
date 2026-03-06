"use client";

import { CatalogGrid } from "./ui/CatalogGrid";
import { Category } from "@/entities/category/model/types";
import img1 from "@/shared/assets/img/catalog/bedroom.png";
import img2 from "@/shared/assets/img/catalog/clothes.png";
import img3 from "@/shared/assets/img/catalog/living.png";
import img4 from "@/shared/assets/img/catalog/kitchen.png";
import img5 from "@/shared/assets/img/catalog/bath.png";
import img6 from "@/shared/assets/img/catalog/dining.png";
import img7 from "@/shared/assets/img/catalog/aroma.png";
import img8 from "@/shared/assets/img/catalog/kids.png";
import img9 from "@/shared/assets/img/catalog/pets.png";

const categories: Category[] = [
  { id: 1, title: "Спальня", subtitle: "Для комфортного сна и отдыха", image: img1 },
  { id: 2, title: "Одежда ", subtitle: "Для вашего персонального комфорта", image: img2 },
  { id: 3, title: "Гостиная", subtitle: "Место притяжения для всей семьи", image: img3 },
  { id: 4, title: "Кухня", subtitle: "Для комфортного сна и отдыха", image: img4 },
  { id: 5, title: " комната", subtitle: "Для вашего персонального комфорта", image: img5 },
  { id: 6, title: "Столовая", subtitle: "Место притяжения для всей семьи", image: img6 },
  { id: 7, title: "Аромат", subtitle: "Для комфортного сна и отдыха", image: img7 },
  { id: 8, title: "Детская", subtitle: "Для вашего персонального комфорта", image: img8 },
  { id: 9, title: " животные", subtitle: "Место притяжения", image: img9 },
];

export default function ProductCatalog() {
  return <CatalogGrid categories={categories} />;
}














