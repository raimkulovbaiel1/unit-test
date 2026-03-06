import { StaticImageData } from "next/image";

export interface Product {
  title: string;
  description: string;
  name?: string;
  nameRu?: string;
  price: string;
  id: number;
  image: string | StaticImageData;
  category?: string;
  hasColors?: boolean;
};



