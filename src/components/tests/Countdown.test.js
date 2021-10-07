import { render } from "@testing-library/react";
import Countdown from "../Countdown";
import "jest-styled-components";

/** Smoke Test */
it("renders without crashing", () => {
    render(<Countdown handleCancel={null} />);
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(<Countdown handleCancel={null} />);
    expect(asFragment()).toMatchSnapshot();
});

/** RTL Tests */
it("renders correctly", () => {
    const { getByText } = render(<Countdown handleCancel={null} />);

    expect(getByText("Time Remaining: ", { exact: false })).toBeInTheDocument();
});
