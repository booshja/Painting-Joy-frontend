import { render } from "@testing-library/react";
import AdminMessageCell from "../AdminMessageCell";

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

    getByText("John Doe");
    getByText("johndoe@email.com");
    getByText("This is a message from John Doe");
    getByRole("button", { name: "Activate" });
    getByRole("button", { name: "Delete" });
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

    getByText("Jane Doe");
    getByText("janedoe@email.com");
    getByText("This is a message from Jane Doe");
    getByRole("button", { name: "Archive" });
    getByRole("button", { name: "Delete" });
});
