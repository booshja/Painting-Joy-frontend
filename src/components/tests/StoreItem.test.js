import { render } from "@testing-library/react";
import StoreItem from "../StoreItem";

const item = {
    id: 0,
    name: "Item name",
    price: "99.99",
    shipping: "100.05",
    isSold: false,
};

const soldItem = {
    id: 0,
    name: "Item name",
    price: "99.99",
    shipping: "100.05",
    isSold: true,
};

/** Smoke Test */
it("renders without crashing, isSold false", () => {
    render(<StoreItem item={item} />);
});

it("renders without crashing, isSold true", () => {
    render(<StoreItem item={soldItem} />);
});

/** Snapshot Test */
it("matches snapshot, isSold false", () => {
    const { asFragment } = render(<StoreItem item={item} />);
    expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot, isSold true", () => {
    const { asFragment } = render(<StoreItem item={soldItem} />);
    expect(asFragment()).toMatchSnapshot();
});

/** RTL Tests */
it("renders correctly, isSold false", () => {
    const { getByAltText, getByText } = render(<StoreItem item={item} />);

    getByAltText("Item name");
    getByText("Item name");
    getByText("$99.99 + $100.05 shipping");
});

it("renders correctly, isSold true", () => {
    const { getByAltText, getByText } = render(<StoreItem item={soldItem} />);

    getByAltText("Item name");
    getByText("Sold");
    getByText("Item name");
});
