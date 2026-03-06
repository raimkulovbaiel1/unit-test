import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";

import Catalog from "./Sections/CatalogPage";


vi.mock("next/navigation", () => ({
  useSearchParams: () => ({
    get: () => "",
  }),
}));


vi.mock("next/link", () => ({
  default: ({ href, children }: any) => (
    <a href={href}>{children}</a>
  ),
}));


vi.mock("@/features/add-to-cart/ui/AddToCartButton", () => ({
  AddToCartButton: ({ product }: any) => (
    <button data-testid="add-to-cart">Add {product.id}</button>
  ),
}));


const mockProducts = [
  {
    id: 1,
    title: "Товар 1",
    description: "Описание товара 1",
    price: 100,
    image: "/test1.png",
  },
];

const mockCategories = [
  { key: "bedroom", title: "Спальня", groups: [] },
];

beforeEach(() => {
  vi.stubGlobal("fetch", vi.fn((url: string) => {
    if (url.includes("/products")) {
      return Promise.resolve({
        json: async () => mockProducts,
      } as any);
    }
    if (url.includes("/categories")) {
      return Promise.resolve({
        json: async () => mockCategories,
      } as any);
    }
    return Promise.resolve({
      json: async () => ({}),
    } as any);
  }) as any);
});

afterEach(() => {
  vi.restoreAllMocks();
});

describe("Catalog Component", () => {
  it("renders the Catalog component", () => {
    render(<Catalog />);
    expect(screen.getByTestId("catalog-component")).toBeInTheDocument();
  });

  it("renders the Catalog header", () => {
    render(<Catalog />);
    expect(screen.getByTestId("catalog-header")).toBeInTheDocument();
    expect(screen.getByText("ВАННАЯ КОМНАТА")).toBeInTheDocument();
  });

  it("renders products grid and product cards", async () => {
    render(<Catalog />);
    expect(screen.getByTestId("products-grid")).toBeInTheDocument();
    const cards = await screen.findAllByTestId("product-card");
    expect(cards.length).toBeGreaterThan(0);

   
    const firstCard = cards[0];
    const scoped = within(firstCard);

    
    const link = scoped.getByRole("link");
    expect(link).toHaveAttribute("href");
    expect(link.getAttribute("href")).toMatch(/^\/product\/\d+$/);


    expect(firstCard.querySelector("h4")).not.toBeNull();

    expect(scoped.getByTestId("add-to-cart")).toBeInTheDocument();
  }); 


  it("renders the sidebar with categories", async () => {
    render(<Catalog />); 
    expect(screen.getByTestId("sidebar-title")).toBeInTheDocument();
  }); 
 
  it ("renders category buttons in the sidebar", async () => {
    render(<Catalog />); 
    const categoryButton = await screen.findByTestId("category-button-bedroom");
    expect(categoryButton).toBeInTheDocument();
    expect(categoryButton).toHaveTextContent("Спальня");
  }); 

});