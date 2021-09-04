import { render } from "@testing-library/react";
import AdminItemForm from "../AdminItemForm";

/** Smoke Test */
it("renders without crashing", () => {
    render(<AdminItemForm />);
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(<AdminItemForm />);
    expect(asFragment()).toMatchSnapshot();
});
