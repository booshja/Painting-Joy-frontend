import { render } from "@testing-library/react";
import Burger from "../Burger";

/** Smoke Test */
it("renders without crashing", () => {
    render(<Burger />);
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(<Burger />);
    expect(asFragment()).toMatchSnapshot();
});
