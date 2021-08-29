import { render } from "@testing-library/react";
import AdminMessages from "../AdminMessages";

/** Smoke Test */
it("renders without crashing", () => {
    render(<AdminMessages />);
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(<AdminMessages />);
    expect(asFragment()).toMatchSnapshot();
});
