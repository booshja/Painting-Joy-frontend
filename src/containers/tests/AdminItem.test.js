import { render } from "@testing-library/react";
import { BrowserRouter, Route } from "react-router-dom";
import AdminItem from "../AdminItem";
import "jest-styled-components";

/** Smoke Test */
it("renders without crashing, variant add", () => {
    render(
        <BrowserRouter>
            <Route path="test/:id">
                <AdminItem variant="Add" />
            </Route>
        </BrowserRouter>
    );
});

it("renders without crashing, variant edit", () => {
    render(
        <BrowserRouter>
            <Route path="test/:id">
                <AdminItem variant="Edit" />
            </Route>
        </BrowserRouter>
    );
});

/** Snapshot Test */
it("matches snapshot, variant add", () => {
    const { asFragment } = render(
        <BrowserRouter>
            <Route path="test/:id">
                <AdminItem variant="Add" />
            </Route>
        </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot, variant edit", () => {
    const { asFragment } = render(
        <BrowserRouter>
            <Route path="test/:id">
                <AdminItem variant="Edit" />
            </Route>
        </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
});

/** RTL Tests */
it("renders correctly, variant add", async () => {
    const { findByText } = render(
        <BrowserRouter>
            <Route path="test/:id">
                <AdminItem variant="Add" />
            </Route>
        </BrowserRouter>
    );

    findByText("Add Item");
});

it("renders correctly, variant edit", async () => {
    const { findByText } = render(
        <BrowserRouter>
            <Route path="test/:id">
                <AdminItem variant="Edit" />
            </Route>
        </BrowserRouter>
    );

    findByText("Edit Item");
});
