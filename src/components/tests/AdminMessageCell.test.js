import { render } from "@testing-library/react";
import AdminMessageCell from "../AdminMessageCell";
import "jest-styled-components";

/** Smoke Test */
it("renders without crashing, showArchived true", () => {
    render(
        <AdminMessageCell
            data={{
                id: 1,
                name: "John Doe",
                email: "johndoe@email.com",
                message: "This is a message from John Doe",
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
        <AdminMessageCell
            data={{
                id: 1,
                name: "John Doe",
                email: "johndoe@email.com",
                message: "This is a message from John Doe",
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
        <AdminMessageCell
            data={{
                id: 1,
                name: "John Doe",
                email: "johndoe@email.com",
                message: "This is a message from John Doe",
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
        <AdminMessageCell
            data={{
                id: 1,
                name: "John Doe",
                email: "johndoe@email.com",
                message: "This is a message from John Doe",
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

it("renders without crashing, showArchived true", () => {
    const { getByText, getByRole } = render(
        <AdminMessageCell
            data={{
                id: 1,
                name: "John Doe",
                email: "johndoe@email.com",
                message: "This is a message from John Doe",
            }}
            handleArchive={null}
            handleUnArchive={null}
            handleDelete={null}
            showArchived={true}
        />
    );

    expect(getByText("John Doe")).toBeInTheDocument();
    expect(getByText("johndoe@email.com")).toBeInTheDocument();
    expect(getByText("This is a message from John Doe")).toBeInTheDocument();
    expect(getByRole("button", { name: "Activate" })).toBeInTheDocument();
    expect(getByRole("button", { name: "Delete" })).toBeInTheDocument();
});

it("renders without crashing, showArchived false", () => {
    const { getByText, getByRole } = render(
        <AdminMessageCell
            data={{
                id: 1,
                name: "Jane Doe",
                email: "janedoe@email.com",
                message: "This is a message from Jane Doe",
            }}
            handleArchive={null}
            handleUnArchive={null}
            handleDelete={null}
            showArchived={false}
        />
    );

    expect(getByText("Jane Doe")).toBeInTheDocument();
    expect(getByText("janedoe@email.com")).toBeInTheDocument();
    expect(getByText("This is a message from Jane Doe")).toBeInTheDocument();
    expect(getByRole("button", { name: "Archive" })).toBeInTheDocument();
    expect(getByRole("button", { name: "Delete" })).toBeInTheDocument();
});
