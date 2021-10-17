import { render } from "@testing-library/react";
import AdminPageTitle from "../AdminPageTitle";
import "jest-styled-components";

/** Smoke Test */
it("renders without crashing", () => {
    render(<AdminPageTitle>Homepage</AdminPageTitle>);
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(<AdminPageTitle>Homepage</AdminPageTitle>);
    expect(asFragment()).toMatchSnapshot();
});

/** RTL Tests */
it("renders correctly", () => {
    const { getByText } = render(<AdminPageTitle>Homepage</AdminPageTitle>);

    expect(getByText("Homepage")).toBeInTheDocument();
});
