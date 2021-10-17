import { render } from "@testing-library/react";
import { BrowserRouter, Route } from "react-router-dom";
import CartContext from "../../context/CartContext";
import StoreItem from "../StoreItem";
import "jest-styled-components";

/** Smoke Test */
it("renders without crashing", () => {
    render(
        <BrowserRouter>
            <Route path="/test/item/1">
                <CartContext.Provider
                    value={{ setLocalStorageCart: jest.fn() }}
                >
                    <StoreItem />
                </CartContext.Provider>
            </Route>
        </BrowserRouter>
    );
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(
        <BrowserRouter>
            <Route path="/test/item/1">
                <CartContext.Provider
                    value={{ setLocalStorageCart: jest.fn() }}
                >
                    <StoreItem />
                </CartContext.Provider>
            </Route>
        </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
});
