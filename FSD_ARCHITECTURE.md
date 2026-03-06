# FSD Architecture (Feature-Sliced Design)

Проект организован согласно методологии Feature-Sliced Design (FSD).

## Структура проекта

```
src/
├── app/              # Инициализация приложения, роутинг, провайдеры
├── pages/            # Композиция страниц из виджетов
├── widgets/          # Крупные составные блоки интерфейса
├── features/         # Интерактивные фичи (действия пользователя)
├── entities/         # Бизнес-сущности
└── shared/           # Переиспользуемый код
    ├── ui/           # Базовые UI компоненты
    ├── lib/          # Утилиты и хелперы
    ├── config/       # Конфигурация
    └── assets/       # Статические ресурсы
```

## Слои (Layers)

### 1. **app** - Инициализация приложения
- Глобальные провайдеры
- Роутинг (Next.js App Router)
- Layout компоненты
- Глобальные стили

**Примеры:**
- `src/app/layout.tsx` - корневой layout
- `src/app/page.tsx` - главная страница

### 2. **pages** - Страницы
- Композиция виджетов для конкретных страниц
- Не содержит бизнес-логики
- Только композиция и маршрутизация

**Примеры:**
- `src/pages/home/` - главная страница

### 3. **widgets** - Виджеты
- Крупные составные блоки интерфейса
- Композиция из features и entities
- Независимые блоки, которые можно переиспользовать

**Примеры:**
- `src/widgets/header/` - шапка сайта
- `src/widgets/footer/` - подвал сайта
- `src/widgets/mini-cart/` - сетка товаров
- `src/widgets/catalog-grid/` - сетка категорий

### 4. **features** - Фичи
- Интерактивные действия пользователя
- Бизнес-логика взаимодействия
- Могут использовать entities

**Примеры:**
- `src/features/add-to-cart/` - добавление в корзину
- `src/features/toggle-favorite/` - добавление в избранное
- `src/features/search/` - поиск

### 5. **entities** - Сущности
- Бизнес-сущности приложения
- Типы данных, модели
- UI представления сущностей

**Примеры:**
- `src/entities/product/` - товар
  - `model/types.ts` - типы
  - `ui/ProductCard/` - карточка товара
- `src/entities/category/` - категория
  - `model/types.ts` - типы
  - `ui/CategoryCard/` - карточка категории

### 6. **shared** - Общий код
- Переиспользуемые компоненты и утилиты
- Не зависит от бизнес-логики

**Примеры:**
- `src/shared/ui/Button/` - кнопка
- `src/shared/assets/` - изображения, иконки
- `src/shared/lib/` - утилиты

## Правила импортов

Слои могут импортировать только из слоев ниже себя:

```
app → pages → widgets → features → entities → shared
```

**Запрещено:**
- ❌ `entities` импортирует из `features`
- ❌ `shared` импортирует из `entities`
- ❌ `widgets` импортирует из `pages`

**Разрешено:**
- ✅ `features` импортирует из `entities` и `shared`
- ✅ `widgets` импортирует из `features`, `entities` и `shared`
- ✅ `pages` импортирует из `widgets`

## Алиасы путей

Настроены алиасы для удобного импорта:

```typescript
import { Product } from "@/entities/product/model/types";
import { AddToCart } from "@/features/add-to-cart";
import { Header } from "@/widgets/header";
import { Button } from "@/shared/ui";
```

## Структура модуля

Каждый модуль может содержать:

```
module-name/
├── ui/              # UI компоненты
│   ├── ComponentName/
│   │   ├── index.tsx
│   │   └── style.css
│   └── index.ts     # Public API
├── model/           # Бизнес-логика, типы
│   ├── types.ts
│   └── ...
├── lib/             # Вспомогательные функции
└── index.ts         # Public API модуля
```

## Примеры использования

### Entity (Product)
```typescript
// src/entities/product/model/types.ts
export interface Product {
  id: number;
  name: string;
  price: string;
}

// src/entities/product/ui/ProductCard/index.tsx
export function ProductCard({ product }: { product: Product }) {
  return <div>{product.name}</div>;
}
```

### Feature (Add to Cart)
```typescript
// src/features/add-to-cart/ui/AddToCartButton/index.tsx
import { Product } from "@/entities/product/model/types";

export function AddToCartButton({ product }: { product: Product }) {
  const handleClick = () => {
    // логика добавления в корзину
  };
  return <button onClick={handleClick}>В корзину</button>;
}
```

### Widget (Product Grid)
```typescript
// src/widgets/mini-cart/ui/ProductGrid/index.tsx
import { ProductCard } from "@/entities/product/ui/ProductCard";
import { AddToCart } from "@/features/add-to-cart";

export function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
```

### Page (Home)
```typescript
// src/pages/home/ui/HomePage/index.tsx
import { ProductGrid } from "@/widgets/mini-cart";
import { CatalogGrid } from "@/widgets/catalog-grid";

export function HomePage() {
  return (
    <>
      <ProductGrid products={products} />
      <CatalogGrid categories={categories} />
    </>
  );
}
```

## Преимущества FSD

1. **Масштабируемость** - легко добавлять новые фичи
2. **Изоляция** - модули независимы друг от друга
3. **Переиспользование** - компоненты можно использовать в разных местах
4. **Понятность** - четкая структура и правила
5. **Тестируемость** - легко тестировать изолированные модули














