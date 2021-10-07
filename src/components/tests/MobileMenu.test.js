import { render } from "@testing-library/react";
import MobileMenu from "../MobileMenu";
import MenuContext from "../../context/MenuContext";
import CartContext from "../../context/CartContext";
import { BrowserRouter } from "react-router-dom";
import "jest-styled-components";

/** Smoke Test */
it("renders without crashing, menuOpen true, cart.length > 0", () => {
    render(
        <BrowserRouter>
            <CartContext.Provider value={{ cart: [1, 2, 3] }}>
                <MenuContext.Provider value={{ menuOpen: true }}>
                    <MobileMenu />
                </MenuContext.Provider>
            </CartContext.Provider>
        </BrowserRouter>
    );
});

it("renders without crashing, menuOpen false, cart.length > 0", () => {
    render(
        <BrowserRouter>
            <CartContext.Provider value={{ cart: [1, 2, 3] }}>
                <MenuContext.Provider value={{ menuOpen: false }}>
                    <MobileMenu />
                </MenuContext.Provider>
            </CartContext.Provider>
        </BrowserRouter>
    );
});

it("renders without crashing, menuOpen true, cart.length = 0", () => {
    render(
        <BrowserRouter>
            <CartContext.Provider value={{ cart: [] }}>
                <MenuContext.Provider value={{ menuOpen: true }}>
                    <MobileMenu />
                </MenuContext.Provider>
            </CartContext.Provider>
        </BrowserRouter>
    );
});

it("renders without crashing, menuOpen false, cart.length = 0", () => {
    render(
        <BrowserRouter>
            <CartContext.Provider value={{ cart: [] }}>
                <MenuContext.Provider value={{ menuOpen: false }}>
                    <MobileMenu />
                </MenuContext.Provider>
            </CartContext.Provider>
        </BrowserRouter>
    );
});

/** Snapshot Test */
it("matches snapshot, menuOpen true, cart.length > 0", () => {
    const { asFragment } = render(
        <BrowserRouter>
            <CartContext.Provider value={{ cart: [1, 2, 3] }}>
                <MenuContext.Provider value={{ menuOpen: true }}>
                    <MobileMenu />
                </MenuContext.Provider>
            </CartContext.Provider>
        </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot, menuOpen false, cart.length > 0", () => {
    const { asFragment } = render(
        <BrowserRouter>
            <CartContext.Provider value={{ cart: [1, 2, 3] }}>
                <MenuContext.Provider value={{ menuOpen: false }}>
                    <MobileMenu />
                </MenuContext.Provider>
            </CartContext.Provider>
        </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot, menuOpen true, cart.length = 0", () => {
    const { asFragment } = render(
        <BrowserRouter>
            <CartContext.Provider value={{ cart: [] }}>
                <MenuContext.Provider value={{ menuOpen: true }}>
                    <MobileMenu />
                </MenuContext.Provider>
            </CartContext.Provider>
        </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot, menuOpen false, cart.length = 0", () => {
    const { asFragment } = render(
        <BrowserRouter>
            <CartContext.Provider value={{ cart: [] }}>
                <MenuContext.Provider value={{ menuOpen: false }}>
                    <MobileMenu />
                </MenuContext.Provider>
            </CartContext.Provider>
        </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
});

/** RTL Tests */
it("renders correctly, menuOpen true, cart.length > 0", () => {
    const { getByText } = render(
        <BrowserRouter>
            <CartContext.Provider value={{ cart: [1, 2, 3] }}>
                <MenuContext.Provider value={{ menuOpen: true }}>
                    <MobileMenu />
                </MenuContext.Provider>
            </CartContext.Provider>
        </BrowserRouter>
    );

    expect(getByText("Home")).toBeInTheDocument();
    expect(getByText("Murals")).toBeInTheDocument();
    expect(getByText("Contact Me")).toBeInTheDocument();
    expect(getByText("Store")).toBeInTheDocument();
    expect(getByText("Cart (3)")).toBeInTheDocument();
});

it("renders correctly, menuOpen false, cart.length > 0", () => {
    const { getByText } = render(
        <BrowserRouter>
            <CartContext.Provider value={{ cart: [1, 2, 3] }}>
                <MenuContext.Provider value={{ menuOpen: false }}>
                    <MobileMenu />
                </MenuContext.Provider>
            </CartContext.Provider>
        </BrowserRouter>
    );

    expect(getByText("Home")).toBeInTheDocument();
    expect(getByText("Murals")).toBeInTheDocument();
    expect(getByText("Contact Me")).toBeInTheDocument();
    expect(getByText("Store")).toBeInTheDocument();
    expect(getByText("Cart (3)")).toBeInTheDocument();
});

it("renders correctly, menuOpen true, cart.length = 0", () => {
    const { getByText } = render(
        <BrowserRouter>
            <CartContext.Provider value={{ cart: [] }}>
                <MenuContext.Provider value={{ menuOpen: true }}>
                    <MobileMenu />
                </MenuContext.Provider>
            </CartContext.Provider>
        </BrowserRouter>
    );

    expect(getByText("Home")).toBeInTheDocument();
    expect(getByText("Murals")).toBeInTheDocument();
    expect(getByText("Contact Me")).toBeInTheDocument();
    expect(getByText("Store")).toBeInTheDocument();
    expect(getByText("Cart (0)")).toBeInTheDocument();
});

it("renders correctly, menuOpen false, cart.length = 0", () => {
    const { getByText } = render(
        <BrowserRouter>
            <CartContext.Provider value={{ cart: [] }}>
                <MenuContext.Provider value={{ menuOpen: false }}>
                    <MobileMenu />
                </MenuContext.Provider>
            </CartContext.Provider>
        </BrowserRouter>
    );

    expect(getByText("Home")).toBeInTheDocument();
    expect(getByText("Murals")).toBeInTheDocument();
    expect(getByText("Contact Me")).toBeInTheDocument();
    expect(getByText("Store")).toBeInTheDocument();
    expect(getByText("Cart (0)")).toBeInTheDocument();
});
