import { render } from "@testing-library/react";
import CartError from "../CartError";
import "jest-styled-components";

/** Smoke Test */
it("renders without crashing", () => {
    render(<CartError />);
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(<CartError />);
    expect(asFragment()).toMatchSnapshot();
});

/** RTL Tests */
it("renders correctly", () => {
    const { getByText, getByAltText } = render(<CartError />);

    getByText("Uh Oh");
    getByText(
        "Looks like someone else snagged something you were looking at first, sorry!"
    );
    getByText("We've updated your cart, go ahead and check it out.");
    getByText("Back");
    getByAltText("Child with hands over their mouth with an oops face");
});
