import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Header } from "./ui/Header";


vi.mock("next/link", () => {
  return {
    default: ({ href, children, ...props }: any) => (
      <a href={href} {...props}>
        {children}
      </a>
    ),
  };
}); 

describe("Header: dropdown Новинки", () => {
  it("кнопка Новинки отображается", () => {
    render(<Header />);
    expect(screen.getByTestId("new-button")).toBeInTheDocument();
  });

  it("по клику открывается dropdown", () => {
    render(<Header />);

   
    expect(screen.queryByTestId("new-dropdown")).not.toBeInTheDocument();

    
    fireEvent.click(screen.getByTestId("new-button"));

  
    expect(screen.getByTestId("new-dropdown")).toBeInTheDocument();
    expect(screen.getByText("Новые поступления")).toBeInTheDocument();
    expect(screen.getByTestId("new-see-all")).toHaveAttribute("href", "/new");
    expect(screen.getByText("Смотреть все")).toBeInTheDocument();
  });

  it("по повторному клику закрывается dropdown", () => {
    render(<Header />);

    fireEvent.click(screen.getByTestId("new-button"));
    expect(screen.getByTestId("new-dropdown")).toBeInTheDocument();

    fireEvent.click(screen.getByTestId("new-button"));
    expect(screen.queryByTestId("new-dropdown")).not.toBeInTheDocument();
  });

  it("клик по товару закрывает dropdown", () => {
    render(<Header />);
     
  
  });
});