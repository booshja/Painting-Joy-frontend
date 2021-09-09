import { render } from "@testing-library/react";
import AdminDashCell from "../AdminDashCell";

/** Smoke Test */
it("renders without crashing", () => {
    render(<AdminDashCell />);
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(<AdminDashCell />);
    expect(asFragment()).toMatchSnapshot();
});
