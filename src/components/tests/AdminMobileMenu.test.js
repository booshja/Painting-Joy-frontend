import { render } from "@testing-library/react";
import AdminMobileMenu from "../AdminMobileMenu";
import MenuContext from "../../context/MenuContext";
import { BrowserRouter } from "react-router-dom";

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

    getByText("Dashboard");
    getByText("Murals");
    getByText("Messages");
    getByText("Store Items");
    getByText("Orders");
    getByText("Log Out");
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

    getByText("Dashboard");
    getByText("Murals");
    getByText("Messages");
    getByText("Store Items");
    getByText("Orders");
    getByText("Log Out");
});
