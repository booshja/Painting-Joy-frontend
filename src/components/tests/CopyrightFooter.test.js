import { render } from "@testing-library/react";
import CopyrightFooter from "../CopyrightFooter";

/** Smoke Test */
it("renders without crashing", () => {
    render(<CopyrightFooter />);
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(<CopyrightFooter />);
    expect(asFragment()).toMatchSnapshot();
});

/** RTL Tests */
it("renders correctly", () => {
    const { getByText } = render(<CopyrightFooter />);

    getByText("2021 - Painting Joy Mural Co.", { exact: false });
});
