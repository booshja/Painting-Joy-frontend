import { Auth0Provider } from "@auth0/auth0-react";
import { render } from "@testing-library/react";
import { BrowserRouter, Route } from "react-router-dom";
import AdminOrder from "../AdminOrder";
import "jest-styled-components";

/** Smoke Test */
it("renders without crashing", () => {
    render(
        <Auth0Provider>
            <BrowserRouter>
                <Route path="/test/:id">
                    <AdminOrder />
                </Route>
            </BrowserRouter>
        </Auth0Provider>
    );
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(
        <Auth0Provider>
            <BrowserRouter>
                <Route path="/test/:id">
                    <AdminOrder />
                </Route>
            </BrowserRouter>
        </Auth0Provider>
    );
    expect(asFragment()).toMatchSnapshot();
});

/** RTL Tests */
it("renders correctly", async () => {
    const { findByText } = render(
        <Auth0Provider>
            <BrowserRouter>
                <Route path="/test/:id">
                    <AdminOrder />
                </Route>
            </BrowserRouter>
        </Auth0Provider>
    );

    findByText("Order Detail");
    findByText("Order Id:");
    findByText("Status:");
    findByText("Amount:");
    findByText("Name:");
    findByText("Email:");
    findByText("Address:");
    findByText("Phone:");
    findByText("Item");
});
