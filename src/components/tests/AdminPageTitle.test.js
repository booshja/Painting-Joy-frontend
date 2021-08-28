import { render } from "@testing-library/react";
import AdminPageTitle from "../AdminPageTitle";

/** Smoke Test */
it("renders without crashing", () => {
    render(<AdminPageTitle />);
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(<AdminPageTitle />);
    expect(asFragment()).toMatchSnapshot();
});
