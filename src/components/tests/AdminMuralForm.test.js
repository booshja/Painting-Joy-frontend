import { render } from "@testing-library/react";
import AdminMuralForm from "../AdminMuralForm";

/** Smoke Test */
it("renders without crashing, variant add", () => {
    render(
        <AdminMuralForm
            handleDataSubmit={null}
            handleCancel={null}
            variant="Add"
            preloadedValues={null}
        />
    );
});

it("renders without crashing, variant edit, preloadedValues", () => {
    render(
        <AdminMuralForm
            handleDataSubmit={null}
            handleCancel={null}
            variant="Edit"
            preloadedValues={{
                title: "This is a title",
                description: "This is a description",
            }}
        />
    );
});

/** Snapshot Test */
it("matches snapshot, variant add", () => {
    const { asFragment } = render(
        <AdminMuralForm
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
        <AdminMuralForm
            handleDataSubmit={null}
            handleCancel={null}
            variant="Edit"
            preloadedValues={{
                title: "This is a title",
                description: "This is a description",
            }}
        />
    );
    expect(asFragment()).toMatchSnapshot();
});

/** RTL Tests */
it("renders correctly, variant add", () => {
    const { getByLabelText, getAllByRole } = render(
        <AdminMuralForm
            handleDataSubmit={null}
            handleCancel={null}
            variant="Add"
            preloadedValues={null}
        />
    );

    getByLabelText("Title:");
    getByLabelText("Description:");
    const buttons = getAllByRole("button");

    expect(buttons[0]).toHaveTextContent("Cancel");
    expect(buttons[1]).toHaveTextContent("Upload");
});

it("renders correctly, variant edit, preloadedValues", () => {
    const { getByDisplayValue, getAllByRole } = render(
        <AdminMuralForm
            handleDataSubmit={null}
            handleCancel={null}
            variant="Edit"
            preloadedValues={{
                title: "This is a title",
                description: "This is a description",
            }}
        />
    );

    getByDisplayValue("This is a title");
    getByDisplayValue("This is a description");
    const buttons = getAllByRole("button");

    expect(buttons[0]).toHaveTextContent("Cancel");
    expect(buttons[1]).toHaveTextContent("Edit");
});
