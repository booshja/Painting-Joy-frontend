import { render } from "@testing-library/react";
import GoBack from "./GoBack";

/** Smoke Test */
it("renders without crashing", () => {
    render(<GoBack />);
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(<GoBack />);
    expect(asFragment()).toMatchSnapshot();
});
