import { render } from "@testing-library/react";
import AdminItems from "../AdminItems";

/** Smoke Test */
it("renders without crashing", () => {
    render(<AdminItems />);
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(<AdminItems />);
    expect(asFragment()).toMatchSnapshot();
});
