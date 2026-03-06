"use client";

import { useState } from "react";
import { Heart } from "lucide-react";
import "./style.css";

interface ToggleFavoriteButtonProps {
  productId: number;
}

export function ToggleFavoriteButton({ productId }: ToggleFavoriteButtonProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClick = () => {
    setIsFavorite(!isFavorite);
    // TODO: Add favorite logic
    console.log("Toggle favorite:", productId, !isFavorite);
  };

  return (
    <button 
      className={`heart-btn ${isFavorite ? "active" : ""}`}
      onClick={handleClick}
      aria-label={isFavorite ? "Удалить из избранного" : "Добавить в избранное"}
    >
      <Heart className="icon" fill={isFavorite ? "currentColor" : "none"} />
    </button>
  );
}


