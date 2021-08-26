import { render } from "@testing-library/react";
import CheckoutRoute from "../CheckoutRoute";

/** Smoke Test */
it("renders without crashing", () => {
    render(<CheckoutRoute />);
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(<CheckoutRoute />);
    expect(asFragment()).toMatchSnapshot();
});
