import React from "react";
import { render } from "@testing-library/react";
import Construction from "./Construction";

// Smoke Test
it("renders without breaking", () => {
    render(<Construction />);
});

// Snapshot Test
it("matches snapshot", () => {
    const { asFragment } = render(<Construction />);
    expect(asFragment()).toMatchSnapshot();
});

// General testing
it("displays the image", () => {
    const { queryByAltText } = render(<Construction />);

    // expect the image to show
    expect(queryByAltText("Paintbrush and paint can")).toBeInTheDocument();
});
