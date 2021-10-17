import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Footer from "../Footer";
import "jest-styled-components";

/** Smoke Test */
it("renders without crashing", () => {
    render(
        <BrowserRouter>
            <Footer />
        </BrowserRouter>
    );
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(
        <BrowserRouter>
            <Footer />
        </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
});

/** RTL Tests */
it("renders correctly", () => {
    const { getByText, getByAltText } = render(
        <BrowserRouter>
            <Footer />
        </BrowserRouter>
    );

    expect(getByText("Painting Joy Mural Co.")).toBeInTheDocument();
    expect(getByText("Contact Me")).toBeInTheDocument();
    expect(
        getByText("2021 - Painting Joy Mural Co", { exact: false })
    ).toBeInTheDocument();
    // children
    // TitleLogoFooter Component
    expect(getByAltText("Painting Joy Mural Co. Logo")).toBeInTheDocument();
    // NavFooter Component
    expect(getByText("Home")).toBeInTheDocument();
    expect(getByText("Murals")).toBeInTheDocument();
    expect(getByText("Contact")).toBeInTheDocument();
    expect(getByText("Store")).toBeInTheDocument();
});
