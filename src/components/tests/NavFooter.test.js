import { render } from "@testing-library/react";
import NavFooter from "../NavFooter";

/** Smoke Test */
it("renders without crashing", () => {
    render(<NavFooter />);
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(<NavFooter />);
    expect(asFragment()).toMatchSnapshot();
});
