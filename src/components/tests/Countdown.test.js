import { render } from "@testing-library/react";
import Countdown from "../Countdown";

/** Smoke Test */
it("renders without crashing", () => {
    render(<Countdown />);
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(<Countdown />);
    expect(asFragment()).toMatchSnapshot();
});
