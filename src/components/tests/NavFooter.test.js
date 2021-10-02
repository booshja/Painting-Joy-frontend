import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NavFooter from "../NavFooter";

/** Smoke Test */
it("renders without crashing", () => {
    render(
        <BrowserRouter>
            <NavFooter />
        </BrowserRouter>
    );
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(
        <BrowserRouter>
            <NavFooter />
        </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
});

/** RTL Tests */
it("renders correctly", () => {
    const { getByText } = render(
        <BrowserRouter>
            <NavFooter />
        </BrowserRouter>
    );

    getByText("Home");
    getByText("Murals");
    getByText("Contact");
    getByText("Store");
});
