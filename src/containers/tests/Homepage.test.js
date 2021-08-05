import { render } from "@testing-library/react";
import Homepage from "../Homepage";

/** Smoke Test */
it("renders without crashing", () => {
    render(<Homepage />);
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(<Homepage />);
    expect(asFragment()).toMatchSnapshot();
});
