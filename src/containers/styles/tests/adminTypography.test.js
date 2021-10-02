import { render } from "@testing-library/react";
import { StyledP } from "../adminTypography";

/** Smoke Test */
it("renders without crashing", () => {
    render(<StyledP>This is a paragraph</StyledP>);
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(<StyledP>This is a paragraph</StyledP>);
    expect(asFragment()).toMatchSnapshot();
});

/** RTL Tests */
it("renders correctly", () => {
    const { getByText } = render(<StyledP>This is a paragraph</StyledP>);

    getByText("This is a paragraph");
});
