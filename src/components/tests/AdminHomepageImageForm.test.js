import { render } from "@testing-library/react";
import AdminHomepageImageForm from "../AdminHomepageImageForm";
import "jest-styled-components";

/** Smoke Test */
it("renders without crashing", () => {
    render(
        <AdminHomepageImageForm
            handleImageSubmit={null}
            image="http://lorempixel.com/200/200"
        />
    );
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(<AdminHomepageImageForm />);
    expect(asFragment()).toMatchSnapshot();
});

/** RTL Tests */
it("renders correctly", () => {
    const { getByTestId, getByAltText, getByRole, getByText } = render(
        <AdminHomepageImageForm
            handleImageSubmit={null}
            image="http://lorempixel.com/200/200"
        />
    );

    expect(getByTestId("upload")).toBeInTheDocument();
    expect(getByRole("button", { name: "Submit" })).toBeInTheDocument();
    expect(getByRole("button", { name: "Keep Image" })).toBeInTheDocument();
    expect(getByText("Current Image:")).toBeInTheDocument();
    expect(getByAltText("Homepage")).toBeInTheDocument();
});
