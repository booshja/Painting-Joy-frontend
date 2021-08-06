import { render } from "@testing-library/react";
import ContactSuccess from "../ContactSuccess";

/** Smoke Test */
it("renders without crashing", () => {
    render(<ContactSuccess />);
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(<ContactSuccess />);
    expect(asFragment()).toMatchSnapshot();
});
