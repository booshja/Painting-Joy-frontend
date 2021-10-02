import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import AdminOrderCell from "../AdminOrderCell";

/** Smoke Test */
it("renders without crashing", () => {
    render(
        <BrowserRouter>
            <AdminOrderCell
                data={{
                    id: 1,
                    email: "johndoe@email.com",
                    transactionId: "transactionid123",
                    status: "Confirmed",
                    amount: "1299.99",
                }}
                handleMarkComplete={null}
                handleMarkShipped={null}
            />
        </BrowserRouter>
    );
});

/** Snapshot Test */
it("matches snapshot", () => {
    const { asFragment } = render(
        <BrowserRouter>
            <AdminOrderCell
                data={{
                    id: 1,
                    email: "johndoe@email.com",
                    transactionId: "transactionid123",
                    status: "Confirmed",
                    amount: "1299.99",
                }}
                handleMarkComplete={null}
                handleMarkShipped={null}
            />
        </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
});

/** RTL Tests */
it("renders correctly", () => {
    const { getByText, getAllByRole } = render(
        <BrowserRouter>
            <AdminOrderCell
                data={{
                    id: 1,
                    email: "johndoe@email.com",
                    transactionId: "transactionid123",
                    status: "Confirmed",
                    amount: "1299.99",
                }}
                handleMarkComplete={null}
                handleMarkShipped={null}
            />
        </BrowserRouter>
    );

    getByText("Order:");
    getByText("#transactionid123");
    getByText("Paid: $1299.99");
    getByText("Status: Confirmed");
    getByText("Email Customer");
    const buttons = getAllByRole("button");

    expect(buttons[0]).toHaveTextContent("Mark Shipped");
    expect(buttons[0]).not.toBeDisabled();
    expect(buttons[1]).toHaveTextContent("Mark Complete");
    expect(buttons[1]).toBeDisabled();
});
