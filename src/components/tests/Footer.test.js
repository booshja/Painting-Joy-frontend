import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Footer from "../Footer";

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

    getByText("Painting Joy Mural Co.");
    getByText("Contact Me");
    getByText("2021 - Painting Joy Mural Co", { exact: false });
    // children
    // TitleLogoFooter Component
    getByAltText("Painting Joy Mural Co. Logo");
    // NavFooter Component
    getByText("Home");
    getByText("Murals");
    getByText("Contact");
    getByText("Store");
});
