import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import CartPage from "./Sections/CartaPage";
import { useCartStore } from "@/store/cart";

describe("CartPage", () => {
    const sampleProduct = {
        id: 1,
        title: "Test Product",
        description: "Desc",
        price: "100",
        image: "/img.png",
    };

    beforeEach(() => {
        useCartStore.setState({
            items: [
                { product: sampleProduct, quantity: 2 },
            ],
        });
    });

    afterEach(() => {
        useCartStore.setState({ items: [] });
    });

    it("title", () => {
        render(<CartPage />);
        expect(screen.getByText("В ВАШЕЙ КОРЗИНЕ")).toBeInTheDocument();
    });

    it("decrease quantity button works", () => {
        render(<CartPage />);
        const decreaseBtn = screen.getByTestId("decrease-btn");
        fireEvent.click(decreaseBtn);
        expect(screen.getByText("1")).toBeInTheDocument();
    });

    it("checkout button exists", () => {
        render(<CartPage />);
        expect(screen.getByTestId("checkout-btn")).toBeInTheDocument();
    })

    it("total items and price are correct", () => {
        render(<CartPage />);
        expect(screen.getByTestId("total-items")).toHaveTextContent("2 товаров");
        const totalPrice = parseInt(sampleProduct.price) * 2;
        expect(screen.getByText("100")).toBeInTheDocument();
    })

    it(" Правая часть", () => {
        render(<CartPage />); 
      
    })

});