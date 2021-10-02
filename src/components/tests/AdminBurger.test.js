import { render } from "@testing-library/react";
import AdminBurger from "../AdminBurger";
import MenuContext from "../../context/MenuContext";

/** Smoke Test */
it("renders without crashing, with context", () => {
    render(
        <MenuContext.Provider value={{ menuOpen: true }}>
            <AdminBurger />
        </MenuContext.Provider>
    );
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(
        <MenuContext.Provider value={{ menuOpen: true }}>
            <AdminBurger />
        </MenuContext.Provider>
    );
    expect(asFragment()).toMatchSnapshot();
});

/** RTL Tests */
it("renders correctly", () => {
    const { getByTestId } = render(
        <MenuContext.Provider value={{ menuOpen: true }}>
            <AdminBurger />
        </MenuContext.Provider>
    );
    const div1 = getByTestId("div1");
    const div2 = getByTestId("div2");
    const div3 = getByTestId("div3");

    expect(div1).toBeInTheDocument();
    expect(div2).toBeInTheDocument();
    expect(div3).toBeInTheDocument();
});
