import { render } from "@testing-library/react";
import { StyledGreenSoloButton, StyledOutlineButton } from "../adminButtons";

/** Smoke Test */
it("renders without crashing, StyledGreenSoloButton", () => {
    render(<StyledGreenSoloButton>Apple</StyledGreenSoloButton>);
});

it("renders without crashing, StyledOutlineButton, no color prop", () => {
    render(<StyledOutlineButton>Banana</StyledOutlineButton>);
});

it("renders without crashing, StyledOutlineButton, with color prop", () => {
    render(<StyledOutlineButton color="#ffff00">Banana</StyledOutlineButton>);
});

/** Snapshot Test */
it("matches snapshot, StyledGreenSoloButton", () => {
    const { asFragment } = render(
        <StyledGreenSoloButton>Apple</StyledGreenSoloButton>
    );
    expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot, StyledOutlineButton, no color prop", () => {
    const { asFragment } = render(
        <StyledOutlineButton>Banana</StyledOutlineButton>
    );
    expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot, StyledOutlineButton, with color prop", () => {
    const { asFragment } = render(
        <StyledOutlineButton color="#ffff00 ">Banana</StyledOutlineButton>
    );
    expect(asFragment()).toMatchSnapshot();
});

/** RTL Tests */
it("renders correctly, StyledGreenSoloButton", () => {
    const { getByText } = render(
        <StyledGreenSoloButton>Apple</StyledGreenSoloButton>
    );

    getByText("Apple");
});

it("renders correctly, StyledOutlineButton, no color prop", () => {
    const { getByText } = render(
        <StyledOutlineButton>Banana</StyledOutlineButton>
    );

    getByText("Banana");
});

it("renders correctly, StyledOutlineButton, with color prop", () => {
    const { getByText } = render(
        <StyledOutlineButton color="#ffff00">Banana</StyledOutlineButton>
    );

    getByText("Banana");
});
