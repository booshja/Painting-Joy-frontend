import { render } from "@testing-library/react";
import LoginForm from "../LoginForm";

/** Smoke Test */
it("renders without crashing", () => {
    render(<LoginForm />);
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(<LoginForm />);
    expect(asFragment()).toMatchSnapshot();
});
