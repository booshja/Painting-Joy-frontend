import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import AdminNav from "../AdminNav";
import "jest-styled-components";

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

    expect(getByText("Dashboard")).toBeInTheDocument();
    expect(getByText("Murals")).toBeInTheDocument();
    expect(getByText("Messages")).toBeInTheDocument();
    expect(getByText("Store Items")).toBeInTheDocument();
    expect(getByText("Orders")).toBeInTheDocument();
});
