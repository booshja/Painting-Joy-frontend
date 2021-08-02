import { render } from "@testing-library/react";
import NewDisplay from "../NewDisplay";

/** Smoke Test */
it("renders without crashing", () => {
    render(<NewDisplay />);
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(<NewDisplay />);
    expect(asFragment()).toMatchSnapshot();
});
