import { render } from "@testing-library/react";
import CartError from "../CartError";

/** Smoke Test */
it("renders without crashing", () => {
    render(<CartError />);
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(<CartError />);
    expect(asFragment()).toMatchSnapshot();
});
