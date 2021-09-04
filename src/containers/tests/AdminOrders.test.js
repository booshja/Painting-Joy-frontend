import { render } from "@testing-library/react";
import AdminOrders from "../AdminOrders";

/** Smoke Test */
it("renders without crashing", () => {
    render(<AdminOrders />);
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(<AdminOrders />);
    expect(asFragment()).toMatchSnapshot();
});
