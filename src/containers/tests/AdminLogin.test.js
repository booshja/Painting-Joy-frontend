import { render } from "@testing-library/react";
import AdminLogin from "../AdminLogin";

/** Smoke Test */
it("renders without crashing", () => {
    render(<AdminLogin />);
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(<AdminLogin />);
    expect(asFragment()).toMatchSnapshot();
});
