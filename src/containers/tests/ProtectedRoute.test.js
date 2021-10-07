import { render, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute";
import MenuContext from "../../context/MenuContext";
import "jest-styled-components";

/** Smoke Test */
it("renders without crashing", () => {
    render(
        <BrowserRouter>
            <MenuContext.Provider value={{ menuOpen: false }}>
                <ProtectedRoute />
            </MenuContext.Provider>
        </BrowserRouter>
    );
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(
        <BrowserRouter>
            <MenuContext.Provider value={{ menuOpen: false }}>
                <ProtectedRoute />
            </MenuContext.Provider>
        </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
});

/** RTL Tests */
it("renders loading screen", () => {
    const { getByText } = render(
        <BrowserRouter>
            <MenuContext.Provider value={{ menuOpen: false }}>
                <ProtectedRoute />
            </MenuContext.Provider>
        </BrowserRouter>
    );

    expect(getByText("Loading...")).toBeInTheDocument();
});

it("renders Route", () => {
    const { findByText } = render(
        <BrowserRouter>
            <MenuContext.Provider value={{ menuOpen: false }}>
                <ProtectedRoute children={<h1>Child!</h1>} />
            </MenuContext.Provider>
        </BrowserRouter>
    );
    waitFor(async () => {
        expect(findByText("Child!")).toBeInTheDocument();
    });
});
