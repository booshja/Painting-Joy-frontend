import { render } from "@testing-library/react";
import LoadingSpinner from "../LoadingSpinner";

/** Smoke Test */
it("renders without crashing", () => {
    render(<LoadingSpinner />);
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(<LoadingSpinner />);
    expect(asFragment()).toMatchSnapshot();
});

/** RTL Tests */
it("renders correctly", () => {
    const { getByText } = render(<LoadingSpinner />);

    getByText("Loading...");
});
