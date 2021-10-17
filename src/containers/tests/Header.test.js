import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";
import MenuContext from "../../context/MenuContext";
import CartContext from "../../context/CartContext";
import "jest-styled-components";

/** Smoke Test */
it("renders without crashing", () => {
    render(
        <BrowserRouter>
            <MenuContext.Provider
                value={{ menuOpen: false, setMenuOpen: jest.fn() }}
            >
                <CartContext.Provider value={{ cart: [1, 2, 3] }}>
                    <Header />
                </CartContext.Provider>
            </MenuContext.Provider>
        </BrowserRouter>
    );
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(
        <BrowserRouter>
            <MenuContext.Provider
                value={{ menuOpen: false, setMenuOpen: jest.fn() }}
            >
                <CartContext.Provider value={{ cart: [1, 2, 3] }}>
                    <Header />
                </CartContext.Provider>
            </MenuContext.Provider>
        </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
});

/** RTL Tests */
it("renders correctly", () => {
    const { getByText } = render(
        <BrowserRouter>
            <MenuContext.Provider
                value={{ menuOpen: false, setMenuOpen: jest.fn() }}
            >
                <CartContext.Provider value={{ cart: [1, 2, 3] }}>
                    <Header />
                </CartContext.Provider>
            </MenuContext.Provider>
        </BrowserRouter>
    );

    expect(getByText("Painting Joy Mural Co.")).toBeInTheDocument();
});
