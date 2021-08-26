import { render } from "@testing-library/react";
import PublicRoute from "../PublicRoute";

/** Smoke Test */
it("renders without crashing", () => {
    render(<PublicRoute />);
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(<PublicRoute />);
    expect(asFragment()).toMatchSnapshot();
});
