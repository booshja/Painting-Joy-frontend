import { render } from "@testing-library/react";
import NewDisplay from "../NewDisplay";
import "jest-styled-components";

/** Smoke Test */
it("renders without crashing, variant null", () => {
    render(
        <NewDisplay
            variant={null}
            title="This is a title"
            image="http://lorempixel.com/200/200"
            id={0}
        />
    );
});

it("renders without crashing, variant mural", () => {
    render(
        <NewDisplay
            variant="mural"
            title="This is a title"
            image="http://lorempixel.com/200/200"
            id={0}
        />
    );
});

/** Snapshot Test */
it("matches snapshot, variant null", () => {
    const { asFragment } = render(
        <NewDisplay
            variant={null}
            title="This is a title"
            image="http://lorempixel.com/200/200"
            id={0}
        />
    );
    expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot, variant mural", () => {
    const { asFragment } = render(
        <NewDisplay
            variant="mural"
            title="This is a title"
            image="http://lorempixel.com/200/200"
            id={0}
        />
    );
    expect(asFragment()).toMatchSnapshot();
});

/** RTL Tests */
it("renders correctly, variant null", () => {
    const { getByAltText, getByText } = render(
        <NewDisplay
            variant={null}
            title="This is a title"
            image="http://lorempixel.com/200/200"
            id={0}
        />
    );

    expect(getByAltText("This is a title")).toBeInTheDocument();
    expect(getByText("See what's new in the store!")).toBeInTheDocument();
});

it("renders correctly, variant mural", () => {
    const { getByAltText, getByText } = render(
        <NewDisplay
            variant="mural"
            title="This is a title"
            image="http://lorempixel.com/200/200"
            id={0}
        />
    );

    expect(getByAltText("This is a title")).toBeInTheDocument();
    expect(getByText("See my latest mural!")).toBeInTheDocument();
});
