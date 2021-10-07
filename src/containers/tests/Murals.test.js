import { render, waitFor } from "@testing-library/react";
import Murals from "../Murals";
import "jest-styled-components";

/** Smoke Test */
it("renders without crashing", () => {
    render(<Murals />);
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(<Murals />);
    expect(asFragment()).toMatchSnapshot();
});

/** RTL Tests */
it("renders correctly", () => {
    const { findByText } = render(<Murals />);

    waitFor(async () => {
        expect(await findByText("Murals")).toBeInTheDocument();
    });
});
