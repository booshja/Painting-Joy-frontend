import { getAllByRole, render } from "@testing-library/react";
import AdminTripleButton from "../AdminTripleButton";
import "jest-styled-components";

/** Smoke Test */
it("renders without crashing, showArchived true", () => {
    render(
        <AdminTripleButton
            id={1}
            handleArchive={null}
            handleUnArchive={null}
            handleDelete={null}
            showArchived={true}
        />
    );
});

it("renders without crashing, showArchived false", () => {
    render(
        <AdminTripleButton
            id={1}
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
        <AdminTripleButton
            id={1}
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
        <AdminTripleButton
            id={1}
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
    const { getAllByRole } = render(
        <AdminTripleButton
            id={1}
            handleArchive={null}
            handleUnArchive={null}
            handleDelete={null}
            showArchived={true}
        />
    );

    const buttons = getAllByRole("button");
    expect(buttons[0]).toHaveTextContent("Edit");
    expect(buttons[1]).toHaveTextContent("Unarchive");
    expect(buttons[2]).toHaveTextContent("Delete");
});

it("renders correctly, showArchived false", () => {
    const { getAllByRole } = render(
        <AdminTripleButton
            id={1}
            handleArchive={null}
            handleUnArchive={null}
            handleDelete={null}
            showArchived={false}
        />
    );

    const buttons = getAllByRole("button");
    expect(buttons[0]).toHaveTextContent("Edit");
    expect(buttons[1]).toHaveTextContent("Archive");
    expect(buttons[2]).toHaveTextContent("Delete");
});
