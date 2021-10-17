import { render } from "@testing-library/react";
import ContactMe from "../ContactMe";
import "jest-styled-components";

/** Smoke Test */
it("renders without crashing", () => {
    render(<ContactMe />);
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(<ContactMe />);
    expect(asFragment()).toMatchSnapshot();
});

/** RTL Tests */
it("renders correctly", () => {
    const { getByText, getByLabelText } = render(<ContactMe />);

    expect(getByText("Contact Me")).toBeInTheDocument();
    expect(
        getByText(
            "Want to inquire about a mural? Anything else you'd like to tell me? Send me a message below!"
        )
    ).toBeInTheDocument();
    // check for contact form render
    expect(getByLabelText("Name:")).toBeInTheDocument();
});
