import { render } from "@testing-library/react";
import App from "./App";
import "jest-styled-components";

// Smoke Test
it("renders without breaking", () => {
    render(<App />);
});

// Snapshot Test
it("matches snapshot", () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
});
