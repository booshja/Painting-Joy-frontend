import { render } from "@testing-library/react";
import CheckoutSuccess from "../CheckoutSuccess";

/** Smoke Test */
it("renders without crashing", () => {
    render(<CheckoutSuccess />);
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(<CheckoutSuccess />);
    expect(asFragment()).toMatchSnapshot();
});
