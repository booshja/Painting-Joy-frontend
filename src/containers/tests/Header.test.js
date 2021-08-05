import { render } from "@testing-library/react";
import Header from "../Header";

/** Smoke Test */
it("renders without crashing", () => {
    render(<Header />);
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(<Header />);
    expect(asFragment()).toMatchSnapshot();
});
