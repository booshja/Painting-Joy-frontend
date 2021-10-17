import { render } from "@testing-library/react";
import ContactForm from "../ContactForm";
import "jest-styled-components";

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

    expect(getByLabelText("Name:")).toBeInTheDocument();
    expect(getByLabelText("Email:")).toBeInTheDocument();
    expect(getByLabelText("Message:")).toBeInTheDocument();
    expect(getByRole("button", { name: "Submit" })).toBeInTheDocument();
});
