import { render } from "@testing-library/react";
import AdminHomepageForm from "../AdminHomepageForm";
import "jest-styled-components";

/** Smoke Test */
it("renders without crashing", () => {
    render(<AdminHomepageForm />);
});

/** Snapshot Test */
it("matches snapshot, with preloadedValues", () => {
    const { asFragment } = render(
        <AdminHomepageForm
            preloadedValues={{
                greeting: "This is a greeting",
                message: "This is a message",
            }}
            handleDataSubmit={null}
            setStep={null}
        />
    );
    expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot, without preloadedValues", () => {
    const { asFragment } = render(
        <AdminHomepageForm
            preloadedValues={null}
            handleDataSubmit={null}
            setStep={null}
        />
    );
    expect(asFragment()).toMatchSnapshot();
});

/** RTL Tests */
it("renders correctly, with preloadedValues", () => {
    const { getByDisplayValue } = render(
        <AdminHomepageForm
            preloadedValues={{
                greeting: "This is a greeting",
                message: "This is a message",
            }}
            handleDataSubmit={null}
            setStep={null}
        />
    );

    const greeting = getByDisplayValue("This is a greeting");
    const message = getByDisplayValue("This is a message");

    expect(greeting).toBeInTheDocument();
    expect(message).toBeInTheDocument();
});

it("renders correctly, without preloadedValues", () => {
    const { getByLabelText } = render(
        <AdminHomepageForm
            preloadedValues={null}
            handleDataSubmit={null}
            setStep={null}
        />
    );

    const greeting = getByLabelText("Greeting:");
    const message = getByLabelText("Message:");

    expect(greeting).toBeInTheDocument();
    expect(message).toBeInTheDocument();
});
