import { render } from "@testing-library/react";
import AdminMural from "../AdminMural";

/** Smoke Test */
it("renders without crashing", () => {
    render(<AdminMural />);
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(<AdminMural />);
    expect(asFragment()).toMatchSnapshot();
});
