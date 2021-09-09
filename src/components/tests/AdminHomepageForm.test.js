import { render } from "@testing-library/react";
import AdminHomepageForm from "../AdminHomepageForm";

/** Smoke Test */
it("renders without crashing", () => {
    render(<AdminHomepageForm />);
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(<AdminHomepageForm />);
    expect(asFragment()).toMatchSnapshot();
});
