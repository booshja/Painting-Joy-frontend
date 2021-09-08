import { render } from "@testing-library/react";
import AdminOrder from "../AdminOrder";

/** Smoke Test */
it("renders without crashing", () => {
    render(<AdminOrder />);
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(<AdminOrder />);
    expect(asFragment()).toMatchSnapshot();
});
