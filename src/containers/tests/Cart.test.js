import { render } from "@testing-library/react";
import Cart from "../Cart";
import CartContext from "../../context/CartContext";
import { BrowserRouter } from "react-router-dom";
import "jest-styled-components";

/** Smoke Test */
it("renders without crashing, nothing in cart", () => {
    render(
        <BrowserRouter>
            <CartContext.Provider
                value={{
                    cart: [],
                    setLocalStorageCart: jest.fn(),
                    setOrderId: jest.fn(),
                }}
            >
                <Cart />
            </CartContext.Provider>
        </BrowserRouter>
    );
});

it("renders without crashing, items in cart", () => {
    render(
        <BrowserRouter>
            <CartContext.Provider
                value={{
                    cart: [1, 2, 3, 4],
                    setLocalStorageCart: jest.fn(),
                    setOrderId: jest.fn(),
                }}
            >
                <Cart />
            </CartContext.Provider>
        </BrowserRouter>
    );
});

/** Snapshot Test */
it("matches snapshot, nothing in cart", () => {
    const { asFragment } = render(
        <BrowserRouter>
            <CartContext.Provider
                value={{
                    cart: [],
                    setLocalStorageCart: jest.fn(),
                    setOrderId: jest.fn(),
                }}
            >
                <Cart />
            </CartContext.Provider>
        </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot, items in cart", () => {
    const { asFragment } = render(
        <BrowserRouter>
            <CartContext.Provider
                value={{
                    cart: [1, 2, 3, 4],
                    setLocalStorageCart: jest.fn(),
                    setOrderId: jest.fn(),
                }}
            >
                <Cart />
            </CartContext.Provider>
        </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
});

/** RTL Tests */
it("renders correctly, nothing in cart", async () => {
    const { findByText } = render(
        <BrowserRouter>
            <CartContext.Provider
                value={{
                    cart: [],
                    setLocalStorageCart: jest.fn(),
                    setOrderId: jest.fn(),
                }}
            >
                <Cart />
            </CartContext.Provider>
        </BrowserRouter>
    );

    await findByText("Back");
    await findByText("There is nothing in your cart.");
    await findByText("Go add something!");
});

it("renders correctly, items in cart", async () => {
    const { findByText, findByRole } = render(
        <BrowserRouter>
            <CartContext.Provider
                value={{
                    cart: [1, 2, 3, 4],
                    setLocalStorageCart: jest.fn(),
                    setOrderId: jest.fn(),
                }}
            >
                <Cart />
            </CartContext.Provider>
        </BrowserRouter>
    );

    await findByText("Back");
    await findByText("Shipping:");
    await findByText("Items:");
    await findByText("Subtotal:");
    await findByRole("button", { name: "Checkout" });
});
