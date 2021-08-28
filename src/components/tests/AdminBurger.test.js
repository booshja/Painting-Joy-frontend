import { render } from "@testing-library/react";
import AdminBurger from "../AdminBurger";

/** Smoke Test */
it("renders without crashing", () => {
    render(<AdminBurger />);
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(<AdminBurger />);
    expect(asFragment()).toMatchSnapshot();
});
