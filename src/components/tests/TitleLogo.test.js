import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import TitleLogo from "../TitleLogo";
import CartContext from "../../context/CartContext";

/** Smoke Test */
it("renders without crashing", () => {
    render(
        <BrowserRouter>
            <CartContext.Provider value={{ cart: [] }}>
                <TitleLogo />
            </CartContext.Provider>
        </BrowserRouter>
    );
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(
        <BrowserRouter>
            <CartContext.Provider value={{ cart: [] }}>
                <TitleLogo />
            </CartContext.Provider>
        </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
});

/** RTL Tests */
it("renders without crashing", () => {
    const { getByAltText, getByText } = render(
        <BrowserRouter>
            <CartContext.Provider value={{ cart: [] }}>
                <TitleLogo />
            </CartContext.Provider>
        </BrowserRouter>
    );

    getByAltText("Painting Joy Mural Co. Logo");
    getByText("Home");
    getByText("Murals");
    getByText("Contact");
    getByText("Store");
    getByText("Cart (0)");
});
