import { render } from "@testing-library/react";
import AdminDashboard from "../AdminDashboard";

/** Smoke Test */
it("renders without crashing", () => {
    render(<AdminDashboard />);
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(<AdminDashboard />);
    expect(asFragment()).toMatchSnapshot();
});
