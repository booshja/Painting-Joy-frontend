import { render } from "@testing-library/react";
import ProtectedRoute from "./ProtectedRoute";

/** Smoke Test */
it("renders without crashing", () => {
    render(<ProtectedRoute />);
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(<ProtectedRoute />);
    expect(asFragment()).toMatchSnapshot();
});
