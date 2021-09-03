import { render } from "@testing-library/react";
import AdminItemCell from "../AdminItemCell";

/** Smoke Test */
it("renders without crashing", () => {
    render(<AdminItemCell />);
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(<AdminItemCell />);
    expect(asFragment()).toMatchSnapshot();
});
