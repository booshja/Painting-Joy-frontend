import { Auth0Provider } from "@auth0/auth0-react";
import { render } from "@testing-library/react";
import AdminOrders from "../AdminOrders";
import "jest-styled-components";

/** Smoke Test */
it("renders without crashing", () => {
    render(
        <Auth0Provider>
            <AdminOrders />
        </Auth0Provider>
    );
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(
        <Auth0Provider>
            <AdminOrders />
        </Auth0Provider>
    );
    expect(asFragment()).toMatchSnapshot();
});

/** RTL Tests */
it("renders correctly", async () => {
    const { findByText } = render(
        <Auth0Provider>
            <AdminOrders />
        </Auth0Provider>
    );

    findByText("Orders");
});
