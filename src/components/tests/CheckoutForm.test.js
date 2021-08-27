import { render } from "@testing-library/react";
import CheckoutForm from "../CheckoutForm";

/** Smoke Test */
it("renders without crashing", () => {
    render(<CheckoutForm />);
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(<CheckoutForm />);
    expect(asFragment()).toMatchSnapshot();
});
