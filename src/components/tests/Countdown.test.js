import { render } from "@testing-library/react";
import Countdown from "../Countdown";

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

    getByText("Time Remaining: ", { exact: false });
});
