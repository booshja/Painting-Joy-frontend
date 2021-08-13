import { render } from "@testing-library/react";
import Checkout from "../Checkout";

/** Smoke Test */
it("renders without crashing", () => {
    render(<Checkout />);
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(<Checkout />);
    expect(asFragment()).toMatchSnapshot();
});
