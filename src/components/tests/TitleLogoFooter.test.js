import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import TitleLogoFooter from "../TitleLogoFooter";
import "jest-styled-components";

/** Smoke Test */
it("renders without crashing", () => {
    render(
        <BrowserRouter>
            <TitleLogoFooter />
        </BrowserRouter>
    );
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(
        <BrowserRouter>
            <TitleLogoFooter />
        </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
});

/** RTL Tests */
it("renders correctly", () => {
    const { getByAltText } = render(
        <BrowserRouter>
            <TitleLogoFooter />
        </BrowserRouter>
    );

    expect(getByAltText("Painting Joy Mural Co. Logo")).toBeInTheDocument();
});
