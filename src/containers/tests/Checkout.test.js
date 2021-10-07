import { render, waitFor } from "@testing-library/react";
import Checkout from "../Checkout";
import CartContext from "../../context/CartContext";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import "jest-styled-components";

/** Smoke Test */
it("renders without crashing", () => {
    const promise = loadStripe(process.env.REACT_APP_STRIPE_API_KEY);
    render(
        <Elements stripe={promise}>
            <CartContext.Provider
                value={{
                    cart: [
                        { price: 9.99, shipping: 12.99 },
                        { price: 9.99, shipping: 12.99 },
                        { price: 9.99, shipping: 12.99 },
                    ],
                    setLocalStorageCart: jest.fn(),
                    orderId: 1,
                }}
            >
                <Checkout />
            </CartContext.Provider>
        </Elements>
    );
});

/** Snapshot Test */
it("matches snapshot", () => {
    const promise = loadStripe(process.env.REACT_APP_STRIPE_API_KEY);
    const { asFragment } = render(
        <Elements stripe={promise}>
            <CartContext.Provider
                value={{
                    cart: [
                        { price: 9.99, shipping: 12.99 },
                        { price: 9.99, shipping: 12.99 },
                        { price: 9.99, shipping: 12.99 },
                    ],
                    setLocalStorageCart: jest.fn(),
                    orderId: 1,
                }}
            >
                <Checkout />
            </CartContext.Provider>
        </Elements>
    );
    expect(asFragment()).toMatchSnapshot();
});

/** RTL Tests */
it("renders correctly", () => {
    const promise = loadStripe(process.env.REACT_APP_STRIPE_API_KEY);

    const { findByText, findByRole } = render(
        <Elements stripe={promise}>
            <CartContext.Provider
                value={{
                    cart: [
                        { price: 9.99, shipping: 12.99 },
                        { price: 9.99, shipping: 12.99 },
                        { price: 9.99, shipping: 12.99 },
                    ],
                    setLocalStorageCart: jest.fn(),
                    orderId: 1,
                }}
            >
                <Checkout />
            </CartContext.Provider>
        </Elements>
    );
    waitFor(async () => {
        expect(await findByText("Checkout")).toBeInTheDocument();
        expect(
            await findByText(
                "Please fill in your card details for secure payment processing through Stripe."
            )
        ).toBeInTheDocument();
        expect(
            await findByText("Your total: $", { exact: false })
        ).toBeInTheDocument();
        expect(
            await findByRole("button", { name: "Pay Now" })
        ).toBeInTheDocument();
        expect(
            await findByRole("button", { name: "Cancel" })
        ).toBeInTheDocument();
    });
});
