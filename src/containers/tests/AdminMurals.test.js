import { Auth0Provider } from "@auth0/auth0-react";
import { render } from "@testing-library/react";
import AdminMurals from "../AdminMurals";
import "jest-styled-components";

/** Smoke Test */
it("renders without crashing", () => {
    render(
        <Auth0Provider>
            <AdminMurals />
        </Auth0Provider>
    );
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(
        <Auth0Provider>
            <AdminMurals />
        </Auth0Provider>
    );
    expect(asFragment()).toMatchSnapshot();
});

/** RTL Tests */
it("renders correctly", async () => {
    const { findByText, findByRole } = render(
        <Auth0Provider>
            <AdminMurals />
        </Auth0Provider>
    );

    findByText("Murals");
    findByRole("button", { name: "Add New Mural" });
    findByRole("button", { name: "See Archived Murals" });
    findByText("No active murals!");
});
