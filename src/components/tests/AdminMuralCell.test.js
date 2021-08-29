import { render } from "@testing-library/react";
import AdminMuralCell from "../AdminMuralCell";

/** Smoke Test */
it("renders without crashing", () => {
    render(<AdminMuralCell />);
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(<AdminMuralCell />);
    expect(asFragment()).toMatchSnapshot();
});
