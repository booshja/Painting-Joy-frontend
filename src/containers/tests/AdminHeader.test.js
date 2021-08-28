import { render } from "@testing-library/react";
import AdminHeader from "../AdminHeader";

/** Smoke Test */
it("renders without crashing", () => {
    render(<AdminHeader />);
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(<AdminHeader />);
    expect(asFragment()).toMatchSnapshot();
});
