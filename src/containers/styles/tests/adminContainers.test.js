import { render } from "@testing-library/react";
import { StyledCell } from "../adminContainers";

const child = <h1>This is a test</h1>;

/** Smoke Test */
it("renders without crashing", () => {
    render(<StyledCell>{child}</StyledCell>);
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(<StyledCell>{child}</StyledCell>);
    expect(asFragment()).toMatchSnapshot();
});

/** RTL Tests */
it("renders correctly", () => {
    const { getByText } = render(<StyledCell>{child}</StyledCell>);

    getByText("This is a test");
});
