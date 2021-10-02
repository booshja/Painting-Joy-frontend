import { render } from "@testing-library/react";
import PageTitle from "../PageTitle";

const child = <h1>Test!</h1>;

/** Smoke Test */
it("renders without crashing", () => {
    render(<PageTitle>{child}</PageTitle>);
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(<PageTitle>{child}</PageTitle>);
    expect(asFragment()).toMatchSnapshot();
});

/** RTL Tests */
it("renders correctly", () => {
    const { getByText } = render(<PageTitle>{child}</PageTitle>);

    getByText("Test!");
});
