import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import GoBack from "../GoBack";

/** Smoke Test */
it("renders without crashing", () => {
    render(
        <BrowserRouter>
            <GoBack to="/testlink" />
        </BrowserRouter>
    );
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(
        <BrowserRouter>
            <GoBack to="/testlink" />
        </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
});

/** RTL Tests */
it("renders correctly", () => {
    const { getByText } = render(
        <BrowserRouter>
            <GoBack to="/testlink" />
        </BrowserRouter>
    );

    getByText("Back", { exact: false });
});
