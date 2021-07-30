import { render } from "@testing-library/react";
import TitleLogo from "../TitleLogo";

/** Smoke Test */
it("renders without crashing", () => {
    render(<TitleLogo />);
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(<TitleLogo />);
    expect(asFragment()).toMatchSnapshot();
});
