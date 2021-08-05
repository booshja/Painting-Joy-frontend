import { render } from "@testing-library/react";
import NavLink from "../NavLink";

/** Smoke Test */
it("renders without crashing", () => {
    render(<NavLink />);
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(<NavLink />);
    expect(asFragment()).toMatchSnapshot();
});
