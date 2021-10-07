import { render } from "@testing-library/react";
import CheckoutForm from "../CheckoutForm";
import CartContext from "../../context/CartContext";
import "jest-styled-components";

/** Smoke Test */
it("renders without crashing", () => {
    render(
        <CartContext.Provider value={{ orderId: "orderId123" }}>
            <CheckoutForm nextStep={null} amount="129.99" />
        </CartContext.Provider>
    );
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(
        <CartContext.Provider value={{ orderId: "orderId123" }}>
            <CheckoutForm nextStep={null} amount="129.99" />
        </CartContext.Provider>
    );
    expect(asFragment()).toMatchSnapshot();
});

/** RTL Tests */
it("renders correctly", () => {
    const { getByLabelText, getAllByRole } = render(
        <CartContext.Provider value={{ orderId: "orderId123" }}>
            <CheckoutForm nextStep={null} amount="129.99" />
        </CartContext.Provider>
    );

    expect(getByLabelText("Name:")).toBeInTheDocument();
    expect(getByLabelText("Email Address:")).toBeInTheDocument();
    expect(getByLabelText("Street:")).toBeInTheDocument();
    expect(getByLabelText("Unit:")).toBeInTheDocument();
    expect(getByLabelText("City:")).toBeInTheDocument();
    expect(getByLabelText("State:")).toBeInTheDocument();
    expect(getByLabelText("Zipcode: (ex: 98101)")).toBeInTheDocument();
    expect(
        getByLabelText("Phone Number: (ex: 5555555555)")
    ).toBeInTheDocument();
    const buttons = getAllByRole("button");

    expect(buttons[0]).toHaveTextContent("Cancel");
    expect(buttons[1]).toHaveTextContent("Continue");
});
