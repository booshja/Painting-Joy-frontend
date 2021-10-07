import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NavFooter from "../NavFooter";
import "jest-styled-components";

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

    expect(getByText("Home")).toBeInTheDocument();
    expect(getByText("Murals")).toBeInTheDocument();
    expect(getByText("Contact")).toBeInTheDocument();
    expect(getByText("Store")).toBeInTheDocument();
});
