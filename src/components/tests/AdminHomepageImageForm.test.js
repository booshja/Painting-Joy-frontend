import { render } from "@testing-library/react";
import AdminHomepageImageForm from "../AdminHomepageImageForm";

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

    getByTestId("upload");
    getByRole("button", { name: "Submit" });
    getByRole("button", { name: "Keep Image" });
    getByText("Current Image:");
    getByAltText("Homepage");
});
