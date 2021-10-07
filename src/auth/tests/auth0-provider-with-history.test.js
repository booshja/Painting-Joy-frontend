import { render } from "@testing-library/react";
import Auth0ProviderWithHistory from "../auth0-provider-with-history";

/** Smoke Test */
it("renders without crashing", () => {
    render(<Auth0ProviderWithHistory />);
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(<Auth0ProviderWithHistory />);
    expect(asFragment()).toMatchSnapshot();
});
