import { render } from "@testing-library/react";
import AboutMe from "../AboutMe";

/** Smoke Test */
it("renders without crashing", () => {
    render(<AboutMe />);
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(<AboutMe />);
    expect(asFragment()).toMatchSnapshot();
});
