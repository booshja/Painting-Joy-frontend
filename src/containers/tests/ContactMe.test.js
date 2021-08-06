import { render } from "@testing-library/react";
import ContactMe from "../ContactMe";

/** Smoke Test */
it("renders without crashing", () => {
    render(<ContactMe />);
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(<ContactMe />);
    expect(asFragment()).toMatchSnapshot();
});
