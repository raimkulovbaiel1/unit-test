import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Footer } from ".";

describe("Footer", () => {
  it("renders section titles", () => {
    render(<Footer />);

    expect(screen.getByText("О компании")).toBeInTheDocument();
    expect(screen.getByText("Помощь")).toBeInTheDocument();
    expect(screen.getByText("Контакты")).toBeInTheDocument();
  }); 

it ("o компании ", () => {
  render(<Footer />);

expect (screen.getByText("О компании")).toBeInTheDocument(); 
expect (screen.getByText("Помощь")).toBeInTheDocument();
});
});
