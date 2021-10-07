import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import AdminHeader from "../AdminHeader";
import MenuContext from "../../context/MenuContext";
import "jest-styled-components";

/** Smoke Test */
it("renders without crashing, login true, menuOpen true", () => {
    render(
        <BrowserRouter>
            <MenuContext.Provider value={{ menuOpen: true }}>
                <AdminHeader login={true} />
            </MenuContext.Provider>
        </BrowserRouter>
    );
});

it("renders without crashing, login false, menuOpen true", () => {
    render(
        <BrowserRouter>
            <MenuContext.Provider value={{ menuOpen: true }}>
                <AdminHeader login={false} />
            </MenuContext.Provider>
        </BrowserRouter>
    );
});

it("renders without crashing, login true, menuOpen false", () => {
    render(
        <BrowserRouter>
            <MenuContext.Provider value={{ menuOpen: false }}>
                <AdminHeader login={true} />
            </MenuContext.Provider>
        </BrowserRouter>
    );
});

it("renders without crashing, login false, menuOpen false", () => {
    render(
        <BrowserRouter>
            <MenuContext.Provider value={{ menuOpen: false }}>
                <AdminHeader login={false} />
            </MenuContext.Provider>
        </BrowserRouter>
    );
});

/** Snapshot Test */
it("matches snapshot, login true, menuOpen true", () => {
    const { asFragment } = render(
        <BrowserRouter>
            <MenuContext.Provider value={{ menuOpen: true }}>
                <AdminHeader login={true} />
            </MenuContext.Provider>
        </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot, login false, menuOpen true", () => {
    const { asFragment } = render(
        <BrowserRouter>
            <MenuContext.Provider value={{ menuOpen: true }}>
                <AdminHeader login={false} />
            </MenuContext.Provider>
        </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot, login true, menuOpen false", () => {
    const { asFragment } = render(
        <BrowserRouter>
            <MenuContext.Provider value={{ menuOpen: false }}>
                <AdminHeader login={true} />
            </MenuContext.Provider>
        </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot, login false, menuOpen false", () => {
    const { asFragment } = render(
        <BrowserRouter>
            <MenuContext.Provider value={{ menuOpen: false }}>
                <AdminHeader login={false} />
            </MenuContext.Provider>
        </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
});

/** RTL Tests */
it("renders correctly, login true, menuOpen true", () => {
    const { getByText } = render(
        <BrowserRouter>
            <MenuContext.Provider value={{ menuOpen: true }}>
                <AdminHeader login={true} />
            </MenuContext.Provider>
        </BrowserRouter>
    );

    getByText("Painting Joy Mural Co.");
});

it("renders correctly, login false, menuOpen true", () => {
    const { getByText } = render(
        <BrowserRouter>
            <MenuContext.Provider value={{ menuOpen: true }}>
                <AdminHeader login={false} />
            </MenuContext.Provider>
        </BrowserRouter>
    );

    getByText("Painting Joy Mural Co.");
    getByText("Log Out");
});

it("renders correctly, login true, menuOpen false", () => {
    const { getByText } = render(
        <BrowserRouter>
            <MenuContext.Provider value={{ menuOpen: false }}>
                <AdminHeader login={true} />
            </MenuContext.Provider>
        </BrowserRouter>
    );

    getByText("Painting Joy Mural Co.");
});

it("renders correctly, login false, menuOpen false", () => {
    const { getByText } = render(
        <BrowserRouter>
            <MenuContext.Provider value={{ menuOpen: false }}>
                <AdminHeader login={false} />
            </MenuContext.Provider>
        </BrowserRouter>
    );

    getByText("Painting Joy Mural Co.");
    getByText("Log Out");
});
