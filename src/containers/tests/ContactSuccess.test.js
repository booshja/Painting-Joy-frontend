import { render } from "@testing-library/react";
import ContactSuccess from "../ContactSuccess";
import "jest-styled-components";

/** Smoke Test */
it("renders without crashing", () => {
    render(<ContactSuccess />);
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(<ContactSuccess />);
    expect(asFragment()).toMatchSnapshot();
});

/** RTL Tests */
it("renders correctly", () => {
    const { getByText, getByAltText } = render(<ContactSuccess />);

    expect(getByText("Contact Me")).toBeInTheDocument();
    expect(
        getByText(
            "Thank you for your message! I've got it saved and I'll reply just as soon as I get all this paint off my hands!"
        )
    ).toBeInTheDocument();
    expect(getByText("Back")).toBeInTheDocument();
    expect(
        getByAltText("Envelope with dried flowers on a table")
    ).toBeInTheDocument();
});
