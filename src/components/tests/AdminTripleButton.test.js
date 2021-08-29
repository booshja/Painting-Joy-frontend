import { render } from "@testing-library/react";
import AdminTripleButton from "../AdminTripleButton";

/** Smoke Test */
it("renders without crashing", () => {
    render(<AdminTripleButton />);
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(<AdminTripleButton />);
    expect(asFragment()).toMatchSnapshot();
});
