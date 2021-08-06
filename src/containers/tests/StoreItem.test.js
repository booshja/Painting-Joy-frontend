import { render } from "@testing-library/react";
import StoreItem from "../StoreItem";

/** Smoke Test */
it("renders without crashing", () => {
    render(<StoreItem />);
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(<StoreItem />);
    expect(asFragment()).toMatchSnapshot();
});
