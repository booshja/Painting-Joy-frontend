import { render } from "@testing-library/react";
import Menu from "../Menu";

/** Smoke Test */
it("renders without crashing", () => {
    render(<Menu />);
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(<Menu />);
    expect(asFragment()).toMatchSnapshot();
});
