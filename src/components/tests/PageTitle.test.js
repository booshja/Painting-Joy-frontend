import { render } from "@testing-library/react";
import PageTitle from "../PageTitle";
import "jest-styled-components";

/** Smoke Test */
it("renders without crashing", () => {
    render(<PageTitle>Test!</PageTitle>);
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(<PageTitle>Test!</PageTitle>);
    expect(asFragment()).toMatchSnapshot();
});

/** RTL Tests */
it("renders correctly", () => {
    const { getByText } = render(<PageTitle>Test!</PageTitle>);

    expect(getByText("Test!")).toBeInTheDocument();
});
