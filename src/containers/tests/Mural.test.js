import { render, waitFor } from "@testing-library/react";
import { BrowserRouter, Route } from "react-router-dom";
import Mural from "../Mural";
import "jest-styled-components";

/** Smoke Test */
it("renders without crashing", () => {
    render(
        <BrowserRouter>
            <Route path="/testroute/0" />
            <Mural />
        </BrowserRouter>
    );
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(
        <BrowserRouter>
            <Route path="/testroute/0" />
            <Mural />
        </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
});

/** RTL Tests */
it("renders correctly", () => {
    const { findByText } = render(
        <BrowserRouter>
            <Route path="/testroute/0" />
            <Mural />
        </BrowserRouter>
    );

    waitFor(async () => {
        expect(await findByText("Back")).toBeInTheDocument();
        expect(
            await findByText("Want to talk about what I could paint for you?")
        ).toBeInTheDocument();
        expect(await findByText("Contact Me Here!")).toBeInTheDocument();
    });
});
