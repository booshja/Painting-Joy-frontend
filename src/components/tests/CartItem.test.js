import { render } from "@testing-library/react";
import CartItem from "../CartItem";
import CartContext from "../../context/CartContext";
import "jest-styled-components";

/** Smoke Test */
it("renders without crashing", () => {
    render(
        <CartContext.Provider value={{ removeFromCart: null }}>
            <CartItem
                item={{
                    id: 1,
                    name: "Name",
                    price: "199.99",
                    shipping: "123.99",
                }}
            />
        </CartContext.Provider>
    );
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(
        <CartContext.Provider value={{ removeFromCart: null }}>
            <CartItem
                item={{
                    id: 1,
                    name: "Name",
                    price: "199.99",
                    shipping: "123.99",
                }}
            />
        </CartContext.Provider>
    );
    expect(asFragment()).toMatchSnapshot();
});

/** RTL Tests */
it("renders correctly", () => {
    const { getByText, getByAltText, getByRole } = render(
        <CartContext.Provider value={{ removeFromCart: null }}>
            <CartItem
                item={{
                    id: 1,
                    name: "Name",
                    price: "199.99",
                    shipping: "123.99",
                }}
            />
        </CartContext.Provider>
    );

    expect(getByAltText("Name")).toBeInTheDocument();
    expect(getByText("Name")).toBeInTheDocument();
    expect(getByText("Price: $199.99")).toBeInTheDocument();
    expect(getByText("Shipping: $123.99")).toBeInTheDocument();
    expect(getByRole("button", { name: "Remove" })).toBeInTheDocument();
});
