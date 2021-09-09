import { render } from "@testing-library/react";
import AdminHomepageImageForm from "../AdminHomepageImageForm";

/** Smoke Test */
it("renders without crashing", () => {
    render(<AdminHomepageImageForm />);
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(<AdminHomepageImageForm />);
    expect(asFragment()).toMatchSnapshot();
});
