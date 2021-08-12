import { render } from "@testing-library/react";
import CheckoutCancel from "../CheckoutCancel";

/** Smoke Test */
it("renders without crashing", () => {
    render(<CheckoutCancel />);
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(<CheckoutCancel />);
    expect(asFragment()).toMatchSnapshot();
});
