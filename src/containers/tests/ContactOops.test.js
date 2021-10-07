import { render } from "@testing-library/react";
import ContactOops from "../ContactOops";
import "jest-styled-components";

/** Smoke Test */
it("renders without crashing", () => {
    render(<ContactOops />);
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(<ContactOops />);
    expect(asFragment()).toMatchSnapshot();
});

/** RTL Tests */
it("renders correctly", () => {
    const { getByText, getByAltText } = render(<ContactOops />);

    expect(getByText("Contact Me")).toBeInTheDocument();
    expect(
        getByText(
            "Uh oh, something went wrong and we didn't get your message! Please go back and try again."
        )
    ).toBeInTheDocument();
    expect(getByText("Back")).toBeInTheDocument();
    expect(
        getByAltText("Dropped ice cream cone on the ground")
    ).toBeInTheDocument();
});
