
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import New from "./Sections/NewArrivalsPage";

// ✅ next/navigation (на будущее, если появится useRouter)
vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn() }),
  usePathname: () => "/new",
  useSearchParams: () => new URLSearchParams(),
}));

// ✅ next/link -> обычный <a>
vi.mock("next/link", () => ({
  default: ({ href, children, ...props }: any) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

// ✅ next/image -> обычный <img>
vi.mock("next/image", () => ({
  default: (props: any) => <img {...props} />,
}));

// ✅ мок AddToCartButton (у тебя именованный экспорт)
vi.mock("@/features/add-to-cart/ui/AddToCartButton", () => ({
  AddToCartButton: () => <button data-testid="add-to-cart">В корзину</button>,
}));

type MockProduct = {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
};

// --- helpers (как делают мидлы) ---
const mockFetchSuccess = (products: MockProduct[]) => {
  global.fetch = vi.fn().mockResolvedValue({
    ok: true,
    json: async () => products,
  } as any);
};

const mockFetchFail = () => {
  global.fetch = vi.fn().mockRejectedValue(new Error("Network error"));
};

describe("NewArrivalsPage", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("shows loading initially", () => {
    render(<New />);
    expect(screen.getByText("Загружаем новинки...")).toBeInTheDocument();

    // ⚠️ у тебя этот testid на спиннере (лучше потом переименовать в loading-spinner)
    expect(screen.getByTestId("error-message")).toBeInTheDocument();
  });

  it("shows error UI when fetch fails", async () => {
    mockFetchFail();
    render(<New />);

  
    const retry = await screen.findByRole("button", { name: /попробовать снова/i });

    expect(screen.getByTestId("error")).toBeInTheDocument();
    expect(retry).toBeInTheDocument();
    expect(screen.getByText(/не удалось загрузить новинки/i)).toBeInTheDocument();
  });

  it('clicking "Попробовать снова" reloads page', async () => {
    mockFetchFail();

    const reloadMock = vi.fn();
    Object.defineProperty(window, "location", {
      value: { ...window.location, reload: reloadMock },
      writable: true,
    });

    render(<New />);

    const retry = await screen.findByRole("button", { name: /попробовать снова/i });
    fireEvent.click(retry);

    expect(reloadMock).toHaveBeenCalledTimes(1);
  });

  it("renders product card info (title, link, image, description, price, add-to-cart)", async () => {
    mockFetchSuccess([
      {
        id: 1,
        title: "Iphone 15",
        description: "New flagship phone",
        price: "11540",
        image: "/test.jpg",
      },
    ]);

    render(<New />);

    
    expect(await screen.findByText("NEW")).toBeInTheDocument();

  
    const titleLink = await screen.findByTestId("product-title-1");
    expect(titleLink).toHaveAttribute("href", "/product/1");
    expect(titleLink).toHaveTextContent("Iphone 15");

 
    expect(screen.getByText("New flagship phone")).toBeInTheDocument();
    expect(screen.getByText("11540")).toBeInTheDocument();

  
    expect(screen.getByRole("img", { name: "Iphone 15" })).toBeInTheDocument();

  
    expect(screen.getByTestId("add-to-cart")).toBeInTheDocument();
  });
});