import { render } from "@testing-library/react";
import AdminItemCell from "../AdminItemCell";

/** Smoke Test */
it("renders without crashing, showSoldOut true, isSold false", () => {
    render(
        <AdminItemCell
            data={{
                id: 1,
                name: "Test Name",
                shipping: "123.99",
                price: "299.99",
                description: "Description",
                quantity: 3,
                isSold: false,
            }}
            handleMarkSoldOut={null}
            handleDelete={null}
            showSoldOut={true}
        />
    );
});

it("renders without crashing, showSoldOut true, isSold true", () => {
    render(
        <AdminItemCell
            data={{
                id: 2,
                name: "Test Name 2",
                shipping: "123.99",
                price: "299.99",
                description: "Description 2",
                quantity: 0,
                isSold: true,
            }}
            handleMarkSoldOut={null}
            handleDelete={null}
            showSoldOut={true}
        />
    );
});

it("renders without crashing, showSoldOut false, isSold false", () => {
    render(
        <AdminItemCell
            data={{
                id: 3,
                name: "Test Name 3",
                shipping: "98.98",
                price: "333.55",
                description: "Description 3",
                quantity: 5,
                isSold: false,
            }}
            handleMarkSoldOut={null}
            handleDelete={null}
            showSoldOut={false}
        />
    );
});

it("renders without crashing, showSoldOut false, isSold true", () => {
    render(
        <AdminItemCell
            data={{
                id: 4,
                name: "Test Name 4",
                shipping: "678.44",
                description: "Description 4",
                price: "456.66",
                quantity: 0,
                isSold: true,
            }}
            handleMarkSoldOut={null}
            handleDelete={null}
            showSoldOut={false}
        />
    );
});

/** Snapshot Test */
it("matches snapshot, showSoldOut true, isSold false", () => {
    const { asFragment } = render(
        <AdminItemCell
            data={{
                id: 1,
                name: "Test Name",
                shipping: "123.99",
                price: "299.99",
                quantity: 3,
                isSold: false,
            }}
            handleMarkSoldOut={null}
            handleDelete={null}
            showSoldOut={true}
        />
    );
    expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot, showSoldOut true, isSold true", () => {
    const { asFragment } = render(
        <AdminItemCell
            data={{
                id: 2,
                name: "Test Name 2",
                shipping: "123.99",
                price: "299.99",
                quantity: 0,
                isSold: true,
            }}
            handleMarkSoldOut={null}
            handleDelete={null}
            showSoldOut={true}
        />
    );
    expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot, showSoldOut false, isSold false", () => {
    const { asFragment } = render(
        <AdminItemCell
            data={{
                id: 3,
                name: "Test Name 3",
                shipping: "98.98",
                price: "333.55",
                quantity: 5,
                isSold: false,
            }}
            handleMarkSoldOut={null}
            handleDelete={null}
            showSoldOut={false}
        />
    );
    expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot, showSoldOut false, isSold true", () => {
    const { asFragment } = render(
        <AdminItemCell
            data={{
                id: 4,
                name: "Test Name 4",
                shipping: "678.44",
                price: "456.66",
                quantity: 0,
                isSold: true,
            }}
            handleMarkSoldOut={null}
            handleDelete={null}
            showSoldOut={false}
        />
    );
    expect(asFragment()).toMatchSnapshot();
});

/** RTL Tests */
it("renders correctly, showSoldOut true, isSold false", () => {
    const { getByText, getByRole, getByAltText } = render(
        <AdminItemCell
            data={{
                id: 1,
                name: "Test Name",
                description: "Description",
                shipping: "123.99",
                price: "299.99",
                quantity: 3,
                isSold: false,
            }}
            handleMarkSoldOut={null}
            handleDelete={null}
            showSoldOut={true}
        />
    );

    getByText("Test Name");
    getByText("Description");
    getByText("Quantity: 3");
    getByText("Price: $299.99");
    getByText("Shipping: $123.99");
    getByText("Total: $423.98");
    getByRole("button", { name: "Edit" });
    getByText("Mark Sold Out");
    getByRole("button", { name: "Delete" });
    getByAltText("Sale Item");
});

it("renders correctly, showSoldOut false, isSold true", () => {
    const { getByText, getByRole, getByAltText } = render(
        <AdminItemCell
            data={{
                id: 4,
                name: "Test Name 4",
                shipping: "678.44",
                price: "456.66",
                description: "Description 4",
                quantity: 0,
                isSold: true,
            }}
            handleMarkSoldOut={null}
            handleDelete={null}
            showSoldOut={false}
        />
    );

    getByText("Test Name 4");
    getByText("Description 4");
    getByText("Sold Out!");
    getByText("Price: $456.66");
    getByText("Shipping: $678.44");
    getByText("Total: $1135.10");
    getByRole("button", { name: "Edit" });
    getByRole("button", { name: "Delete" });
    getByAltText("Sale Item");
});

it("renders correctly, showSoldOut true, isSold true", () => {
    const { getByText, getByRole, getByAltText } = render(
        <AdminItemCell
            data={{
                id: 2,
                name: "Test Name 2",
                shipping: "123.99",
                description: "Description 2",
                price: "299.99",
                quantity: 0,
                isSold: true,
            }}
            handleMarkSoldOut={null}
            handleDelete={null}
        />
    );

    getByText("Test Name 2");
    getByText("Description 2");
    getByText("Sold Out!");
    getByText("Price: $299.99");
    getByText("Shipping: $123.99");
    getByText("Total: $423.98");
    getByRole("button", { name: "Edit" });
    getByRole("button", { name: "Delete" });
    getByAltText("Sale Item");
});

it("renders correctly, showSoldOut false, isSold false", () => {
    const { getByText, getByRole, getByAltText } = render(
        <AdminItemCell
            data={{
                id: 3,
                name: "Test Name 3",
                shipping: "98.98",
                price: "333.55",
                description: "Description 3",
                quantity: 5,
                isSold: false,
            }}
            handleMarkSoldOut={null}
            handleDelete={null}
            showSoldOut={false}
        />
    );

    getByText("Test Name 3");
    getByText("Description 3");
    getByText("Quantity: 5");
    getByText("Price: $333.55");
    getByText("Shipping: $98.98");
    getByText("Total: $432.53");
    getByRole("button", { name: "Edit" });
    getByText("Mark Sold Out");
    getByRole("button", { name: "Delete" });
    getByAltText("Sale Item");
});
