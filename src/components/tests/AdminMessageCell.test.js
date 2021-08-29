import { render } from "@testing-library/react";
import AdminMessageCell from "../AdminMessageCell";

/** Smoke Test */
it("renders without crashing", () => {
    render(<AdminMessageCell />);
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(<AdminMessageCell />);
    expect(asFragment()).toMatchSnapshot();
});
