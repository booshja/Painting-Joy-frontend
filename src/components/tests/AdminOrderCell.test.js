import { render } from "@testing-library/react";
import AdminOrderCell from "../AdminOrderCell";

/** Smoke Test */
it("renders without crashing", () => {
    render(<AdminOrderCell />);
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(<AdminOrderCell />);
    expect(asFragment()).toMatchSnapshot();
});
