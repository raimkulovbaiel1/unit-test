import React from "react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductPage from "@/widgets/product-page/ui/ProductPage";
import ProductDetailPage from "@/app/product/[id]/page";

vi.mock("next/link", () => ({
  default: ({ href, children, ...props }: any) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

vi.mock("next/image", () => ({
  default: (props: any) => <img {...props} />,
}));

vi.mock("@/features/add-to-cart/ui/AddToCartButton", () => ({
  AddToCartButton: () => <button data-testid="add-to-cart">В корзину</button>,
}));

function renderProductDetailPage(id: string) {
  return render(
    <ProductDetailPage params={{ id }} />
  );
}

describe("ProductPage / ProductDetailPage", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("renders product title (ProductPage widget)", () => {
    render(
      <ProductPage
        product={{
          id: 1,
          title: "Мужская футболка с принтом",
          description: "Описание",
          price: "2480 ₽",
          image: "/test.jpg",
          category: "clothes",
        }}
      />
    );

    expect(
      screen.getByText("Мужская футболка с принтом")
    ).toBeInTheDocument();
  });

  it("показывает загрузку", async () => {
    global.fetch = vi.fn(() => new Promise(() => {})) as any;

    renderProductDetailPage("1");

    expect(await screen.findByTestId("loading")).toBeInTheDocument();
    expect(await screen.findByText("Загрузка...")).toBeInTheDocument();
  });

  it("показывает not found", async () => {
    global.fetch = vi.fn().mockRejectedValue(new Error("Network error"));

    renderProductDetailPage("999");

    expect(await screen.findByTestId("not-found")).toBeInTheDocument();
    expect(await screen.findByText("Товар не найден")).toBeInTheDocument();
  });

  it("отображает заголовок каталога", async () => {
    global.fetch = vi.fn().mockRejectedValue(new Error("Network error"));

    renderProductDetailPage("1");

    const title = await screen.findByTestId("sidebar-title");
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent("Каталог товаров");
  });

  it("отображает breadcrumbs", async () => {
    global.fetch = vi.fn().mockRejectedValue(new Error("Network error"));

    renderProductDetailPage("1");

    const breadcrumbs = await screen.findByTestId("breadcrumbs");
    expect(breadcrumbs).toBeInTheDocument();
    expect(breadcrumbs).toHaveTextContent("Каталог товаров");
    expect(breadcrumbs).toHaveTextContent("Ванная комната");
    expect(breadcrumbs).toHaveTextContent("Аксессуары");
  });

  it("показывает кнопку 'В корзину'", async () => {
    global.fetch = vi.fn().mockRejectedValue(new Error("Network error"));

    renderProductDetailPage("1");

    const button = await screen.findByTestId("add-to-cart");
    expect(button).toBeInTheDocument();
  });

  it("специально падает ( цена)", async () => {
    global.fetch = vi.fn().mockRejectedValue(new Error("Network error"));

    renderProductDetailPage("1");

  
    expect(await screen.findByText("2 840 ₽")).toBeInTheDocument();
  });
});