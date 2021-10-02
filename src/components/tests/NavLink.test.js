import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NavLink from "../NavLink";

/** Smoke Test */
it("renders without crashing", () => {
    render(
        <BrowserRouter>
            <NavLink to="/testlink" name="Test Link" />
        </BrowserRouter>
    );
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(
        <BrowserRouter>
            <NavLink to="/testlink" name="Test Link" />
        </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
});

/** RTL Tests */
it("renders correctly", () => {
    const { getByText } = render(
        <BrowserRouter>
            <NavLink to="/testlink" name="Test Link" />
        </BrowserRouter>
    );

    getByText("Test Link");
});
