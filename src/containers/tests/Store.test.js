import { render } from "@testing-library/react";
import Store from "../Store";

/** Smoke Test */
it("renders without crashing", () => {
    render(<Store />);
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(<Store />);
    expect(asFragment()).toMatchSnapshot();
});
