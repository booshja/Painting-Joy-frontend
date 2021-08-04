import { render } from "@testing-library/react";
import Footer from "../Footer";

/** Smoke Test */
it("renders without crashing", () => {
    render(<Footer />);
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment()).toMatchSnapshot();
});
