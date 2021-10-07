import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import PublicRoute from "../PublicRoute";
import MenuContext from "../../context/MenuContext";
import CartContext from "../../context/CartContext";
import "jest-styled-components";

/** Smoke Test */
it("renders without crashing", () => {
    render(
        <BrowserRouter>
            <MenuContext.Provider value={{ menuOpen: false }}>
                <CartContext.Provider value={{ cart: [1, 2, 3] }}>
                    <PublicRoute />
                </CartContext.Provider>
            </MenuContext.Provider>
        </BrowserRouter>
    );
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(
        <BrowserRouter>
            <MenuContext.Provider value={{ menuOpen: false }}>
                <CartContext.Provider value={{ cart: [1, 2, 3] }}>
                    <PublicRoute />
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
            <MenuContext.Provider value={{ menuOpen: false }}>
                <CartContext.Provider value={{ cart: [1, 2, 3] }}>
                    <PublicRoute children={<h1>Children!</h1>} />
                </CartContext.Provider>
            </MenuContext.Provider>
        </BrowserRouter>
    );

    expect(getByText("Children!")).toBeInTheDocument();
});
