import { render } from "@testing-library/react";
import AdminMurals from "../AdminMurals";

/** Smoke Test */
it("renders without crashing", () => {
    render(<AdminMurals />);
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(<AdminMurals />);
    expect(asFragment()).toMatchSnapshot();
});
