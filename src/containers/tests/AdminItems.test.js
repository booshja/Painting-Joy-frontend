import { render } from "@testing-library/react";
import AdminItems from "../AdminItems";
import "jest-styled-components";

/** Smoke Test */
it("renders without crashing", () => {
    render(<AdminItems />);
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(<AdminItems />);
    expect(asFragment()).toMatchSnapshot();
});

/** RTL Tests */
it("renders correctly", async () => {
    const { findByText, findByRole } = render(<AdminItems />);

    findByText("Items");
    findByRole("button", { name: "Add New Item" });
    findByRole("button", { name: "See Sold Out Items" });
    findByText("No available items!");
});
