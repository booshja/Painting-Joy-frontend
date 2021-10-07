import { render } from "@testing-library/react";
import Burger from "../Burger";
import MenuContext from "../../context/MenuContext";
import "jest-styled-components";

/** Smoke Test */
it("renders without crashing, menuOpen true", () => {
    render(
        <MenuContext.Provider value={{ menuOpen: true, setMenuOpen: null }}>
            <Burger />
        </MenuContext.Provider>
    );
});

it("renders without crashing, menuOpen false", () => {
    render(
        <MenuContext.Provider value={{ menuOpen: false, setMenuOpen: null }}>
            <Burger />
        </MenuContext.Provider>
    );
});

/** Snapshot Test */
it("matches snapshot, menuOpen true", () => {
    const { asFragment } = render(
        <MenuContext.Provider value={{ menuOpen: true, setMenuOpen: null }}>
            <Burger />
        </MenuContext.Provider>
    );
    expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot, menuOpen false", () => {
    const { asFragment } = render(
        <MenuContext.Provider value={{ menuOpen: false, setMenuOpen: null }}>
            <Burger />
        </MenuContext.Provider>
    );
    expect(asFragment()).toMatchSnapshot();
});

/** RTL Tests */
it("renders correctly, menuOpen true", () => {
    const { getByTestId } = render(
        <MenuContext.Provider value={{ menuOpen: true, setMenuOpen: null }}>
            <Burger />
        </MenuContext.Provider>
    );

    expect(getByTestId("div1")).toBeInTheDocument();
    expect(getByTestId("div2")).toBeInTheDocument();
    expect(getByTestId("div3")).toBeInTheDocument();
});

it("renders correctly, menuOpen false", () => {
    const { getByTestId } = render(
        <MenuContext.Provider value={{ menuOpen: false, setMenuOpen: null }}>
            <Burger />
        </MenuContext.Provider>
    );

    expect(getByTestId("div1")).toBeInTheDocument();
    expect(getByTestId("div2")).toBeInTheDocument();
    expect(getByTestId("div3")).toBeInTheDocument();
});
