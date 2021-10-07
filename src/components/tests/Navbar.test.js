import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../Navbar";
import CartContext from "../../context/CartContext";
import "jest-styled-components";

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

    expect(getByText("Home")).toBeInTheDocument();
    expect(getByText("Murals")).toBeInTheDocument();
    expect(getByText("Contact")).toBeInTheDocument();
    expect(getByText("Store")).toBeInTheDocument();
    expect(getByText("Cart (4)")).toBeInTheDocument();
});

it("renders correctly, cart = 0", () => {
    const { getByText } = render(
        <BrowserRouter>
            <CartContext.Provider value={{ cart: [] }}>
                <Navbar />
            </CartContext.Provider>
        </BrowserRouter>
    );

    expect(getByText("Home")).toBeInTheDocument();
    expect(getByText("Murals")).toBeInTheDocument();
    expect(getByText("Contact")).toBeInTheDocument();
    expect(getByText("Store")).toBeInTheDocument();
    expect(getByText("Cart (0)")).toBeInTheDocument();
});
