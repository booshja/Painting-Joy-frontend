import { render } from "@testing-library/react";
import Cart from "../Cart";

/** Smoke Test */
it("renders without crashing", () => {
    render(<Cart />);
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(<Cart />);
    expect(asFragment()).toMatchSnapshot();
});
