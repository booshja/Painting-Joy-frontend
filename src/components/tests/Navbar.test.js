import { render } from "@testing-library/react";
import Navbar from "../Navbar";

/** Smoke Test */
it("renders without crashing", () => {
    render(<Navbar />);
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(<Navbar />);
    expect(asFragment()).toMatchSnapshot();
});
