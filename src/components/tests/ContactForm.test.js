import { render } from "@testing-library/react";
import ContactForm from "../ContactForm";

/** Smoke Test */
it("renders without crashing", () => {
    render(<ContactForm />);
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(<ContactForm />);
    expect(asFragment()).toMatchSnapshot();
});

/** RTL Tests */
it("renders correctly", () => {
    const { getByLabelText, getByRole } = render(<ContactForm />);

    getByLabelText("Name:");
    getByLabelText("Email:");
    getByLabelText("Message:");
    getByRole("button", { name: "Submit" });
});
