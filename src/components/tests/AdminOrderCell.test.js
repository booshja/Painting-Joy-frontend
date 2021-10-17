import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import AdminOrderCell from "../AdminOrderCell";
import "jest-styled-components";

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

    expect(getByText("Order:")).toBeInTheDocument();
    expect(getByText("#transactionid123")).toBeInTheDocument();
    expect(getByText("Paid: $1299.99")).toBeInTheDocument();
    expect(getByText("Status: Confirmed")).toBeInTheDocument();
    expect(getByText("Email Customer")).toBeInTheDocument();
    const buttons = getAllByRole("button");

    expect(buttons[0]).toHaveTextContent("Mark Shipped");
    expect(buttons[0]).not.toBeDisabled();
    expect(buttons[1]).toHaveTextContent("Mark Complete");
    expect(buttons[1]).toBeDisabled();
});
