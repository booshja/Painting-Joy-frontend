// dependencies
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
// components
import { AdminPageTitle, LoadingSpinner } from "../components";
import {
    StyledGreenSoloButton,
    StyledOutlineButton,
} from "./styles/adminButtons";
import { StyledP } from "./styles/adminTypography";
import { StyledCell } from "./styles/adminContainers";
// hooks
import { useHistory, useParams } from "react-router";

const StyledAdminOrder = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 91.75vh;
    background-color: #f6f7f1;
    padding-bottom: 2rem;
`;

const StyledDetailCell = styled(StyledCell)`
    width: 95%;
    margin-bottom: 0.5rem;
`;

const StyledBold = styled.span`
    font-weight: 700;
`;

const StyledOrderP = styled(StyledP)`
    margin-bottom: 0.5rem;
`;

const StyledA = styled.a`
    font-family: "News Cycle", sans-serif;
    font-size: 1.2rem;
    font-weight: 700;
    letter-spacing: 1px;
    color: #000000;
    text-decoration: underline;
`;

const StyledOutlineBtn = styled(StyledOutlineButton)`
    font-size: 1.2rem;
    margin-right: 1rem;
    padding-left: 7.5px;
    padding-right: 7.5px;

    &:disabled {
        color: #dadada;
        border: 2px solid #dadada;
    }
`;

const StyledGreenSoloBtn = styled(StyledGreenSoloButton)`
    font-size: 1.2rem;
    &:disabled {
        background-color: #dadada;
    }
`;

const StyledButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-self: center;
    margin-top: 0.5rem;
`;

const AdminOrder = () => {
    // get params
    const { id } = useParams();
    // set up states
    const [loading, setLoading] = useState(true);
    const [order, setOrder] = useState({});
    // set up history
    const history = useHistory();

    useEffect(() => {
        const source = axios.CancelToken.source();
        // on component mount, get order data
        async function getOrderData() {
            try {
                const res = await axios.get(
                    process.env.REACT_APP_BACKEND_URL + `orders/order/${id}`
                );
                // set states
                setOrder(res.data.order);
                setLoading(false);
            } catch (err) {
                console.log("Order retrieval error", err);
                history.get(0);
            }
        }

        getOrderData();

        return function cleanup() {
            source.cancel();
        };
    }, []);

    const handleMarkShipped = async (id) => {
        // send request to api to set order status as shipped
        try {
            await axios.patch(
                process.env.REACT_APP_BACKEND_URL + `orders/order/${id}/ship`
            );
        } catch (err) {
            console.log("Marking shipped error", err);
        }
        history.go(0);
    };

    const handleMarkComplete = async (id) => {
        // send request to api to set order status as completed
        try {
            await axios.patch(
                process.env.REACT_APP_BACKEND_URL +
                    `orders/order/${id}/complete`
            );
        } catch (err) {
            console.log("Marking completed error", err);
        }
        history.go(0);
    };

    // if data is loading, display loading spinner
    if (loading)
        return (
            <StyledAdminOrder>
                <LoadingSpinner />
            </StyledAdminOrder>
        );

    return (
        <StyledAdminOrder>
            <AdminPageTitle>Order Detail</AdminPageTitle>
            <StyledDetailCell>
                <StyledOrderP>
                    <StyledBold>Order Id:</StyledBold> {order.transactionId}
                </StyledOrderP>
                <StyledOrderP>
                    <StyledBold>Status:</StyledBold> {order.status}
                </StyledOrderP>
                <StyledOrderP>
                    <StyledBold>Amount:</StyledBold> ${order.amount}
                </StyledOrderP>
                <StyledOrderP>
                    <StyledBold>Name:</StyledBold> {order.name}
                </StyledOrderP>
                <StyledOrderP>
                    <StyledBold>Email:</StyledBold>{" "}
                    <StyledA href={`mailto:${order.email}`}>
                        {order.email}
                    </StyledA>
                </StyledOrderP>
                <StyledOrderP>
                    <StyledBold>Address:</StyledBold> {order.street},{" "}
                    {order.unit ? order.unit + ", " : null}
                    {order.city}, {order.stateCode} - {order.zipcode}
                </StyledOrderP>
                <StyledOrderP>
                    <StyledBold>Phone:</StyledBold> {order.phone}
                </StyledOrderP>
                <StyledOrderP>
                    <StyledBold>
                        {order.listItems.length > 1 ? "Items:" : "Item:"}
                    </StyledBold>
                </StyledOrderP>
                {order.listItems.map((item, idx) => (
                    <StyledDetailCell key={idx}>
                        <StyledOrderP>
                            <StyledBold>Name: </StyledBold>
                            {item.name}
                        </StyledOrderP>
                        <StyledOrderP>
                            <StyledBold>Price: </StyledBold>${item.price}
                        </StyledOrderP>
                        <StyledOrderP>
                            <StyledBold>Shipping: </StyledBold>${item.shipping}
                        </StyledOrderP>
                        <StyledOrderP>
                            <StyledBold>Item Total: </StyledBold>$
                            {(+item.price + +item.shipping).toFixed(2)}
                        </StyledOrderP>
                    </StyledDetailCell>
                ))}
                <StyledButtonContainer>
                    <StyledOutlineBtn
                        color="#207a7a"
                        onClick={() => handleMarkShipped(id)}
                        disabled={order.status === "Confirmed" ? false : true}
                    >
                        Mark Shipped
                    </StyledOutlineBtn>
                    <StyledGreenSoloBtn
                        onClick={() => handleMarkComplete(id)}
                        disabled={status === "Shipped" ? false : true}
                    >
                        Mark Complete
                    </StyledGreenSoloBtn>
                </StyledButtonContainer>
            </StyledDetailCell>
        </StyledAdminOrder>
    );
};

export default AdminOrder;
