import { render } from "@testing-library/react";
import CartItem from "../CartItem";

/** Smoke Test */
it("renders without crashing", () => {
    render(<CartItem />);
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(<CartItem />);
    expect(asFragment()).toMatchSnapshot();
});
