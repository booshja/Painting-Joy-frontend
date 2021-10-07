import { render } from "@testing-library/react";
import AdminMobileMenu from "../AdminMobileMenu";
import MenuContext from "../../context/MenuContext";
import { BrowserRouter } from "react-router-dom";
import "jest-styled-components";

/** Smoke Test */
it("renders without crashing, menuOpen true", () => {
    render(
        <BrowserRouter>
            <MenuContext.Provider value={{ menuOpen: true, setMenuOpen: null }}>
                <AdminMobileMenu />
            </MenuContext.Provider>
        </BrowserRouter>
    );
});

it("renders without crashing, menuOpen false", () => {
    render(
        <BrowserRouter>
            <MenuContext.Provider
                value={{ menuOpen: false, setMenuOpen: null }}
            >
                <AdminMobileMenu />
            </MenuContext.Provider>
        </BrowserRouter>
    );
});

/** Snapshot Test */
it("matches snapshot, menuOpen true", () => {
    const { asFragment } = render(
        <BrowserRouter>
            <MenuContext.Provider value={{ menuOpen: true, setMenuOpen: null }}>
                <AdminMobileMenu />
            </MenuContext.Provider>
        </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot, menuOpen false", () => {
    const { asFragment } = render(
        <BrowserRouter>
            <MenuContext.Provider
                value={{ menuOpen: false, setMenuOpen: null }}
            >
                <AdminMobileMenu />
            </MenuContext.Provider>
        </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
});

/** RTL Tests */
it("renders correctly, menuOpen true", () => {
    const { getByText } = render(
        <BrowserRouter>
            <MenuContext.Provider value={{ menuOpen: true, setMenuOpen: null }}>
                <AdminMobileMenu />
            </MenuContext.Provider>
        </BrowserRouter>
    );

    expect(getByText("Dashboard")).toBeInTheDocument();
    expect(getByText("Murals")).toBeInTheDocument();
    expect(getByText("Messages")).toBeInTheDocument();
    expect(getByText("Store Items")).toBeInTheDocument();
    expect(getByText("Orders")).toBeInTheDocument();
    expect(getByText("Log Out")).toBeInTheDocument();
});

it("renders correctly, menuOpen false", () => {
    const { getByText } = render(
        <BrowserRouter>
            <MenuContext.Provider
                value={{ menuOpen: false, setMenuOpen: null }}
            >
                <AdminMobileMenu />
            </MenuContext.Provider>
        </BrowserRouter>
    );

    expect(getByText("Dashboard")).toBeInTheDocument();
    expect(getByText("Murals")).toBeInTheDocument();
    expect(getByText("Messages")).toBeInTheDocument();
    expect(getByText("Store Items")).toBeInTheDocument();
    expect(getByText("Orders")).toBeInTheDocument();
    expect(getByText("Log Out")).toBeInTheDocument();
});
