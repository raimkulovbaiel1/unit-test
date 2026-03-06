"use client";

import { useState } from "react";
import "./style.css";

interface SearchInputProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
}

export function SearchInput({ placeholder = "Поиск...", onSearch }: SearchInputProps) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(query);
  };

  return (
    <div className="search-container">
      <form className="search-wrapper" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={placeholder}
          className="search-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="search-button" aria-label="Найти">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
        </button>
      </form>
    </div>
  );
}














