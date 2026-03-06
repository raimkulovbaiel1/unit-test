import React from "react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Offer from "./Sections/Order"; 


describe("OfferPage", () => { 
 it("renders the offer page correctly", () => { 
  render(<Offer />) 
    expect(screen.getByText("Ваши данные")).toBeInTheDocument()
 })
it("отображает поля формы", () => {
  render(<Offer />);
  expect(screen.getByText("Ваше имя")).toBeInTheDocument();
  expect(screen.getByText("Ваша фамилия *")).toBeInTheDocument();
  expect(screen.getByText("Ваше отчество")).toBeInTheDocument();
  expect(screen.getByText("Номер телефона")).toBeInTheDocument();
}); 

it("shows 4 input fields", () => {
  render(<Offer />);
  const inputs = screen.getAllByRole("textbox");
  console.log(inputs.length);
}); 
it("поле имени содержит значение 'Иванов' по умолчанию", () => {
  render(<Offer />);
  expect(screen.getByDisplayValue("Иванов")).toBeInTheDocument();
});

})