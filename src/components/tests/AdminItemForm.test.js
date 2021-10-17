import { render } from "@testing-library/react";
import AdminItemForm from "../AdminItemForm";
import "jest-styled-components";

/** Smoke Test */
it("renders without crashing, variant add", () => {
    render(
        <AdminItemForm
            handleDataSubmit={null}
            handleCancel={null}
            variant="Add"
            preloadedValues={null}
        />
    );
});

it("renders without crashing, variant edit, preloadedValues", () => {
    render(
        <AdminItemForm
            handleDataSubmit={null}
            handleCancel={null}
            variant="Edit"
            preloadedValues={{
                name: "Item Name",
                description: "Item Description",
                quantity: 4,
                price: "444.99",
                shipping: "123.99",
            }}
        />
    );
});

/** Snapshot Test */
it("matches snapshot, variant add", () => {
    const { asFragment } = render(
        <AdminItemForm
            handleDataSubmit={null}
            handleCancel={null}
            variant="Add"
            preloadedValues={null}
        />
    );
    expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot, variant edit, preloadedValues", () => {
    const { asFragment } = render(
        <AdminItemForm
            handleDataSubmit={null}
            handleCancel={null}
            variant="Edit"
            preloadedValues={{
                name: "Item Name 2",
                description: "Item Description 2",
                quantity: 42,
                price: "666.99",
                shipping: "321.99",
            }}
        />
    );
    expect(asFragment()).toMatchSnapshot();
});

/** RTL Tests */
it("renders correctly, variant add", () => {
    const { getByLabelText, getByRole } = render(
        <AdminItemForm
            handleDataSubmit={null}
            handleCancel={null}
            variant="Add"
            preloadedValues={null}
        />
    );

    expect(getByLabelText("Name:")).toBeInTheDocument();
    expect(getByLabelText("Description:")).toBeInTheDocument();
    expect(getByLabelText("Quantity:")).toBeInTheDocument();
    expect(getByLabelText("Price:")).toBeInTheDocument();
    expect(getByLabelText("Shipping:")).toBeInTheDocument();
    expect(getByRole("button", { name: "Cancel" })).toBeInTheDocument();
    expect(getByRole("button", { name: "Upload Image" })).toBeInTheDocument();
});

it("renders correctly, variant edit, preloadedValues", () => {
    const { getByDisplayValue, getByRole } = render(
        <AdminItemForm
            handleDataSubmit={null}
            handleCancel={null}
            variant="Edit"
            preloadedValues={{
                name: "Item Name",
                description: "Item Description",
                quantity: 4,
                price: "444.99",
                shipping: "123.99",
            }}
        />
    );

    expect(getByDisplayValue("Item Name")).toBeInTheDocument();
    expect(getByDisplayValue("Item Description")).toBeInTheDocument();
    expect(getByDisplayValue("4")).toBeInTheDocument();
    expect(getByDisplayValue("444.99")).toBeInTheDocument();
    expect(getByDisplayValue("123.99")).toBeInTheDocument();
    expect(getByRole("button", { name: "Cancel" })).toBeInTheDocument();
    expect(getByRole("button", { name: "Edit Image" })).toBeInTheDocument();
});
