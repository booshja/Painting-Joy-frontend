import { render } from "@testing-library/react";
import CheckoutForm from "../CheckoutForm";
import CartContext from "../../context/CartContext";

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

    getByLabelText("Name:");
    getByLabelText("Email Address:");
    getByLabelText("Street:");
    getByLabelText("Unit:");
    getByLabelText("City:");
    getByLabelText("State:");
    getByLabelText("Zipcode: (ex: 98101)");
    getByLabelText("Phone Number: (ex: 5555555555)");
    const buttons = getAllByRole("button");

    expect(buttons[0]).toHaveTextContent("Cancel");
    expect(buttons[1]).toHaveTextContent("Continue");
});
