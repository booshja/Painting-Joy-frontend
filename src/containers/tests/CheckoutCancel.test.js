import { render } from "@testing-library/react";
import CheckoutCancel from "../CheckoutCancel";
import "jest-styled-components";

/** Smoke Test */
it("renders without crashing", () => {
    render(<CheckoutCancel />);
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(<CheckoutCancel />);
    expect(asFragment()).toMatchSnapshot();
});

/** RTL Tests */
it("renders correctly", () => {
    const { getByText, getByAltText } = render(<CheckoutCancel />);

    expect(getByText("Order Cancelled")).toBeInTheDocument();
    expect(
        getByText(
            "Uh oh! Looks like something went wrong or the order was cancelled. Please try again!"
        )
    ).toBeInTheDocument();
    expect(getByText("Back")).toBeInTheDocument();
    expect(
        getByAltText("Dispondent and confused child on the ground")
    ).toBeInTheDocument();
});
