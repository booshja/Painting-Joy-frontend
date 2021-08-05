import { render } from "@testing-library/react";
import Mural from "../Mural";

/** Smoke Test */
it("renders without crashing", () => {
    render(<Mural />);
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(<Mural />);
    expect(asFragment()).toMatchSnapshot();
});
