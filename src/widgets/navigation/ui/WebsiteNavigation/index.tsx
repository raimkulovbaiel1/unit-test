"use client"; 
import { useState } from "react";
import "./style.css";
 


interface SubCategory {
  label: string;
  children?: string[];
} 

type MenuItem = string | SubCategory;

interface MenuColumn {
  title: string;
  items: MenuItem[];
}

const menu = [
  {
    title: "Спальня",
    items: [
      {
        label: "ПОСТЕЛЬНОЕ БЕЛЬЕ",
        children: [
          "Смотреть все",
          "Основное постельное белье",
          "Пододеяльники",
          "Наволочки",
          "Плоские простыни",
        ],
      },
      {
        label: " ПРОТЕКТОРЫ",
        children: ["БЕСПРИНАДЫ", "КВИЛТЫ", "БЛАНКЕТЫ"],
      },
      { label: "ПОДУШКИ" },
      { label: "МЕБЕЛЬ" },
      { label: "RUGS" },
      { label: "ОСВЕЩЕНИЕ" },
    ],
  },
  {
    title: "Одежда и обувь",
    items: ["ОДЕЖДА", "ОБУВЬ", "СУМКИ", "КРЮЧКИ", "УХОД ЗА БЕЛЬЕМ"],
  },
  {
    title: "Жилая комната",
    items: [
      "МЕБЕЛЬ",
      "RUGS",
      "ЗЕРКАЛА",
      "ЛАМПЫ И ОСВЕЩЕНИЕ",
      "CUSHIONS",
      "BASKETS",
      "ВАЗЫ",
    ],
  },
  {
    title: "Кухня",
    items: [
      "ПОСУДА И УТВАРЬ",
      "СОСУДЫ",
      "КУХОННЫЕ АКСЕССУАРЫ",
      "МЕБЕЛЬ",
      "ОСВЕЩЕНИЕ",
      "СТИРКА И УБОРКА",
    ],
  },
  {
    title: "Столовая",
    items: ["СТОЛОВАЯ ПОСУДА", "БОУЛЫ", "МУГИ", "СТЕКЛЯННАЯ ПОСУДА"],
  },
];

export default function CatalogMenu() { 
 const [openGroups, setOpenGroups] = useState<string[]>([]);

const toggleGroup = (label: string) => {
    setOpenGroups((prev) =>
      prev.includes(label) 
        ? prev.filter((item) => item !== label) 
        : [...prev, label]
    );
  };
  return (
<div className="menu-wrapper">
      {menu.map((col, index) => (
        <div key={index} className="menu-column">
          <h3>{col.title}</h3>

          {col.items.map((item, i) => {
            // Если это просто строка
            if (typeof item === "string") {
              return <p key={i} className="menu-item">{item}</p>;
            }

            // Если это группа с детьми
            const isOpen = openGroups.includes(item.label);
            const hasChildren = item.children && item.children.length > 0;

            return (
              <div key={i} className={`menu-group ${isOpen ? "is-open" : ""}`}>
                <p 
                  className="menu-group-title" 
                  onClick={() => hasChildren && toggleGroup(item.label)}
                  style={{ cursor: hasChildren ? "pointer" : "default" }}
                >
                  <span className={`arrow ${isOpen ? "down" : ""}`}>
                    {hasChildren ? "" : ""}
                  </span>
                  {item.label}
                </p>

                {isOpen && hasChildren && (
                  <div className="menu-subitems-list">
                    {item.children!.map((child, j) => (
                      <p key={j} className="menu-subitem">{child}</p>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
