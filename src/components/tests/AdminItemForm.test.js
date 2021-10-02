import { render } from "@testing-library/react";
import AdminItemForm from "../AdminItemForm";

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

    getByLabelText("Name:");
    getByLabelText("Description:");
    getByLabelText("Quantity:");
    getByLabelText("Price:");
    getByLabelText("Shipping");
    getByRole("button", { name: "Cancel" });
    getByRole("button", { name: "Upload" });
});

it("renders correctly, variant edit, preloadedValues", () => {
    const { getByDisplayValue } = render(
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

    getByDisplayValue("Item Name");
    getByDisplayValue("Item Description");
    getByDisplayValue("4");
    getByDisplayValue("444.99");
    getByDisplayValue("123.99");
    getByRole("button", { name: "Cancel" });
    getByRole("button", { name: "Edit" });
});
