import { render } from "@testing-library/react";
import AdminMuralCell from "../AdminMuralCell";
import "jest-styled-components";

/** Smoke Test */
it("renders without crashing, showArchived true", () => {
    render(
        <AdminMuralCell
            data={{
                id: 1,
                title: "This is a title",
                description: "This is a description",
            }}
            handleArchive={null}
            handleUnArchive={null}
            handleDelete={null}
            showArchived={true}
        />
    );
});

it("renders without crashing, showArchived false", () => {
    render(
        <AdminMuralCell
            data={{
                id: 1,
                title: "This is a title",
                description: "This is a description",
            }}
            handleArchive={null}
            handleUnArchive={null}
            handleDelete={null}
            showArchived={false}
        />
    );
});

/** Snapshot Test */
it("matches snapshot, showArchived true", () => {
    const { asFragment } = render(
        <AdminMuralCell
            data={{
                id: 1,
                title: "This is a title",
                description: "This is a description",
            }}
            handleArchive={null}
            handleUnArchive={null}
            handleDelete={null}
            showArchived={true}
        />
    );
    expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot, showArchived false", () => {
    const { asFragment } = render(
        <AdminMuralCell
            data={{
                id: 1,
                title: "This is a title",
                description: "This is a description",
            }}
            handleArchive={null}
            handleUnArchive={null}
            handleDelete={null}
            showArchived={false}
        />
    );
    expect(asFragment()).toMatchSnapshot();
});

/** RTL Tests */
it("renders correctly, showArchived true", () => {
    const { getByText, getAllByRole, getByAltText } = render(
        <AdminMuralCell
            data={{
                id: 1,
                title: "This is a title",
                description: "This is a description",
            }}
            handleArchive={null}
            handleUnArchive={null}
            handleDelete={null}
            showArchived={true}
        />
    );

    expect(getByText("This is a title")).toBeInTheDocument();
    expect(getByText("This is a description")).toBeInTheDocument();
    const buttons = getAllByRole("button");
    getByAltText("Mural Display Image");

    expect(buttons[0]).toHaveTextContent("Edit");
    expect(buttons[1]).toHaveTextContent("Unarchive");
    expect(buttons[2]).toHaveTextContent("Delete");
});

it("renders correctly, showArchived false", () => {
    const { getByText, getAllByRole, getByAltText } = render(
        <AdminMuralCell
            data={{
                id: 1,
                title: "This is a title",
                description: "This is a description",
            }}
            handleArchive={null}
            handleUnArchive={null}
            handleDelete={null}
            showArchived={false}
        />
    );

    expect(getByText("This is a title")).toBeInTheDocument();
    expect(getByText("This is a description")).toBeInTheDocument();
    const buttons = getAllByRole("button");
    getByAltText("Mural Display Image");

    expect(buttons[0]).toHaveTextContent("Edit");
    expect(buttons[1]).toHaveTextContent("Archive");
    expect(buttons[2]).toHaveTextContent("Delete");
});
