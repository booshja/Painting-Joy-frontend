import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import AdminNav from "../AdminNav";

/** Smoke Test */
it("renders without crashing", () => {
    render(
        <BrowserRouter>
            <AdminNav />
        </BrowserRouter>
    );
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(
        <BrowserRouter>
            <AdminNav />
        </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
});

/** RTL Test */
it("renders correctly", () => {
    const { getByText } = render(
        <BrowserRouter>
            <AdminNav />
        </BrowserRouter>
    );

    getByText("Dashboard");
    getByText("Murals");
    getByText("Messages");
    getByText("Store Items");
    getByText("Orders");
});
