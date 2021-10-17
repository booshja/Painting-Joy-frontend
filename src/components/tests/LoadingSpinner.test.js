import { render } from "@testing-library/react";
import LoadingSpinner from "../LoadingSpinner";
import "jest-styled-components";

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

    expect(getByText("Loading...")).toBeInTheDocument();
});
