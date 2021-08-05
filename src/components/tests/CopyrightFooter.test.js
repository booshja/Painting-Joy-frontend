import { render } from "@testing-library/react";
import CopyrightFooter from "../CopyrightFooter";

/** Smoke Test */
it("renders without crashing", () => {
    render(<CopyrightFooter />);
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(<CopyrightFooter />);
    expect(asFragment()).toMatchSnapshot();
});
