import { Auth0Provider } from "@auth0/auth0-react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import AdminDashboard from "../AdminDashboard";
import "jest-styled-components";

/** Smoke Test */
it("renders without crashing", async () => {
    render(
        <Auth0Provider>
            <BrowserRouter>
                <AdminDashboard />
            </BrowserRouter>
        </Auth0Provider>
    );
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(
        <Auth0Provider>
            <BrowserRouter>
                <AdminDashboard />
            </BrowserRouter>
        </Auth0Provider>
    );
    expect(asFragment()).toMatchSnapshot();
});

it("renders correctly", async () => {
    const { findByText } = render(
        <Auth0Provider>
            <BrowserRouter>
                <AdminDashboard />
            </BrowserRouter>
        </Auth0Provider>
    );

    await findByText("Welcome back, Beth!");
    await findByText("Murals");
    await findByText("Edit Homepage");
    await findByText("Orders");
});
