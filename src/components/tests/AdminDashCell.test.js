import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import AdminDashCell from "../AdminDashCell";
import "jest-styled-components";

/** Smoke Test */
it("renders without crashing, footer false", () => {
    render(
        <BrowserRouter>
            <AdminDashCell
                children={<h1>testy</h1>}
                title="This is a title"
                linkTo="/linkhere"
                footer={false}
            />
        </BrowserRouter>
    );
});

it("renders without crashing, footer true", () => {
    render(
        <BrowserRouter>
            <AdminDashCell
                children={<h1>testy</h1>}
                title="This is a title"
                linkTo="/linkhere"
                footer={true}
            />
        </BrowserRouter>
    );
});

/** Snapshot Test */
it("matches snapshot, footer true", () => {
    const { asFragment } = render(
        <BrowserRouter>
            <AdminDashCell
                children={<h1>testy</h1>}
                title="This is a title"
                linkTo="/linkhere"
                footer={true}
            />
        </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot, footer false", () => {
    const { asFragment } = render(
        <BrowserRouter>
            <AdminDashCell
                children={<h1>testy</h1>}
                title="This is a title"
                linkTo="/linkhere"
                footer={false}
            />
        </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
});

/** RTL Tests */
it("renders correctly, footer true", () => {
    const { getByText } = render(
        <BrowserRouter>
            <AdminDashCell
                children={<h1>testy</h1>}
                title="This is a title"
                linkTo="/linkhere"
                footer={true}
            />
        </BrowserRouter>
    );
    const title = getByText("This is a title");
    const children = getByText("testy");
    const link = getByText("See All >");

    expect(title).toBeInTheDocument();
    expect(children).toBeInTheDocument();
    expect(link).toBeInTheDocument();
});

it("renders correctly, footer false", () => {
    const { getByText } = render(
        <BrowserRouter>
            <AdminDashCell
                children={<h1>testy</h1>}
                title="This is a title"
                linkTo="/linkhere"
                footer={false}
            />
        </BrowserRouter>
    );
    const title = getByText("This is a title");
    const children = getByText("testy");

    expect(title).toBeInTheDocument();
    expect(children).toBeInTheDocument();
});
