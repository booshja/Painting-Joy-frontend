import { render } from "@testing-library/react";
import Burger from "../Burger";
import MenuContext from "../../context/MenuContext";

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

    getByTestId("div1");
    getByTestId("div2");
    getByTestId("div3");
});

it("renders correctly, menuOpen false", () => {
    const { getByTestId } = render(
        <MenuContext.Provider value={{ menuOpen: false, setMenuOpen: null }}>
            <Burger />
        </MenuContext.Provider>
    );

    getByTestId("div1");
    getByTestId("div2");
    getByTestId("div3");
});
