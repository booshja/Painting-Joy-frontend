import { render } from "@testing-library/react";
import AdminLogin from "../AdminLogin";
import "jest-styled-components";

/** Smoke Test */
it("renders without crashing", () => {
    render(<AdminLogin />);
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(<AdminLogin />);
    expect(asFragment()).toMatchSnapshot();
});

/** RTL Tests */
it("renders correctly", async () => {
    const { findByText, findByRole } = render(<AdminLogin />);

    findByText("Login");
    findByRole("button", { name: "Click Here To Log In" });
    findByText("2021 - Painting Joy Mural Co.", { exact: false });
});
