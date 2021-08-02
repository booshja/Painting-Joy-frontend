import { render } from "@testing-library/react";
import TitleLogoFooter from "../TitleLogoFooter";

/** Smoke Test */
it("renders without crashing", () => {
    render(<TitleLogoFooter />);
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(<TitleLogoFooter />);
    expect(asFragment()).toMatchSnapshot();
});
