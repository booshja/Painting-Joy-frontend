import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../Navbar";
import CartContext from "../../context/CartContext";

/** Smoke Test */
it("renders without crashing, cart > 0", () => {
    render(
        <BrowserRouter>
            <CartContext.Provider value={{ cart: [1, 2, 3, 4] }}>
                <Navbar />
            </CartContext.Provider>
        </BrowserRouter>
    );
});

it("renders without crashing, cart = 0", () => {
    render(
        <BrowserRouter>
            <CartContext.Provider value={{ cart: [] }}>
                <Navbar />
            </CartContext.Provider>
        </BrowserRouter>
    );
});

/** Snapshot Test */
it("matches snapshot, cart > 0", () => {
    const { asFragment } = render(
        <BrowserRouter>
            <CartContext.Provider value={{ cart: [1, 2, 3, 4] }}>
                <Navbar />
            </CartContext.Provider>
        </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot, cart = 0", () => {
    const { asFragment } = render(
        <BrowserRouter>
            <CartContext.Provider value={{ cart: [] }}>
                <Navbar />
            </CartContext.Provider>
        </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
});

/** RTL Tests */
it("renders correctly, cart > 0", () => {
    const { getByText } = render(
        <BrowserRouter>
            <CartContext.Provider value={{ cart: [1, 2, 3, 4] }}>
                <Navbar />
            </CartContext.Provider>
        </BrowserRouter>
    );

    getByText("Home");
    getByText("Murals");
    getByText("Contact");
    getByText("Store");
    getByText("Cart (4)");
});

it("renders correctly, cart = 0", () => {
    const { getByText } = render(
        <BrowserRouter>
            <CartContext.Provider value={{ cart: [] }}>
                <Navbar />
            </CartContext.Provider>
        </BrowserRouter>
    );

    getByText("Home");
    getByText("Murals");
    getByText("Contact");
    getByText("Store");
    getByText("Cart (0)");
});
