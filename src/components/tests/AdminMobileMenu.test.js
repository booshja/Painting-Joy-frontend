import { render } from "@testing-library/react";
import AdminMobileMenu from "../AdminMobileMenu";

/** Smoke Test */
it("renders without crashing", () => {
    render(<AdminMobileMenu />);
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(<AdminMobileMenu />);
    expect(asFragment()).toMatchSnapshot();
});
