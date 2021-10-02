import { getByAltText, render } from "@testing-library/react";
import AboutMe from "../AboutMe";

/** Smoke Test */
it("renders without crashing", () => {
    render(<AboutMe />);
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(<AboutMe />);
    expect(asFragment()).toMatchSnapshot();
});

/** RTL Tests */

it("should render correctly", () => {
    const { getByText } = render(
        <AboutMe
            greeting="Hello there!"
            message="This is a message!"
            image="http://lorempixel.com/200/200"
        />
    );
    const greeting = getByText("Hello there!");
    const message = getByText("This is a message!");

    expect(greeting).toBeInTheDocument();
    expect(message).toBeInTheDocument();
});
