import { render } from "@testing-library/react";
import CheckoutSuccess from "../CheckoutSuccess";
import "jest-styled-components";

/** Smoke Test */
it("renders without crashing", () => {
    render(<CheckoutSuccess />);
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(<CheckoutSuccess />);
    expect(asFragment()).toMatchSnapshot();
});

/** RTL Tests */
it("renders correctly", () => {
    const { getByText, getByAltText } = render(<CheckoutSuccess />);

    expect(getByText("Congrats!")).toBeInTheDocument();
    expect(
        getByText(
            "It's all yours! You'll receive a receipt from Stripe (our payment proccessor) shortly, and we'll send you an email once your order has shipped!"
        )
    ).toBeInTheDocument();
    expect(getByText("Back")).toBeInTheDocument();
    expect(
        getByAltText("Excited child cheering with arms up")
    ).toBeInTheDocument();
});
