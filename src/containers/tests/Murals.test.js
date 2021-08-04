import { render } from "@testing-library/react";
import Murals from "../Murals";

/** Smoke Test */
it("renders without crashing", () => {
    render(<Murals />);
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(<Murals />);
    expect(asFragment()).toMatchSnapshot();
});
