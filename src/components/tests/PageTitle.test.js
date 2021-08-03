import { render } from "@testing-library/react";
import PageTitle from "./PageTitle";

/** Smoke Test */
it("renders without crashing", () => {
    render(<PageTitle />);
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(<PageTitle />);
    expect(asFragment()).toMatchSnapshot();
});
