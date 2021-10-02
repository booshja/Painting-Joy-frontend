import { render } from "@testing-library/react";
import CartItem from "../CartItem";
import CartContext from "../../context/CartContext";

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

    getByAltText("Name");
    getByText("Name");
    getByText("Price: $199.99");
    getByText("Shipping: $123.99");
    getByRole("button", { name: "Remove" });
});
