import { render, waitFor } from "@testing-library/react";
import Store from "../Store";
import ItemsContext from "../../context/ItemsContext";
import "jest-styled-components";

/** Smoke Test */
it("renders without crashing", () => {
    render(
        <ItemsContext.Provider
            value={{ items: [1, 2, 3], setItems: jest.fn() }}
        >
            <Store />
        </ItemsContext.Provider>
    );
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(
        <ItemsContext.Provider
            value={{ items: [1, 2, 3], setItems: jest.fn() }}
        >
            <Store />
        </ItemsContext.Provider>
    );
    expect(asFragment()).toMatchSnapshot();
});

/** RTL Tests */
it("renders loading correctly", () => {
    const { getByText } = render(
        <ItemsContext.Provider
            value={{ items: [1, 2, 3], setItems: jest.fn() }}
        >
            <Store />
        </ItemsContext.Provider>
    );

    expect(getByText("Loading...")).toBeInTheDocument();
});

it("renders loading correctly", () => {
    const { findByText } = render(
        <ItemsContext.Provider
            value={{ items: [1, 2, 3], setItems: jest.fn() }}
        >
            <Store />
        </ItemsContext.Provider>
    );

    waitFor(async () => {
        expect(findByText("Store")).toBeInTheDocument();
    });
});

it("renders loading correctly, no items", () => {
    const { findByText } = render(
        <ItemsContext.Provider value={{ items: [], setItems: jest.fn() }}>
            <Store />
        </ItemsContext.Provider>
    );

    waitFor(async () => {
        expect(findByText("Store")).toBeInTheDocument();
        expect(findByText("Nothing currently for sale!")).toBeInTheDocument();
    });
});
