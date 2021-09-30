import { render } from "@testing-library/react";
import AdminNav from "../AdminNav";

/** Smoke Test */
it("renders without crashing", () => {
    render(<AdminNav />);
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(<AdminNav />);
    expect(asFragment()).toMatchSnapshot();
});
