// dependencies
import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
// components
import { AdminOrderCell, AdminPageTitle, LoadingSpinner } from "../components";
// hooks
import { useHistory } from "react-router";

const StyledAdminOrders = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f6f7f1;
    min-height: 91.75vh;
`;

const StyledOrdersContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 85%;
    margin-top: 1rem;
    margin-bottom: 2rem;
`;

const AdminOrders = () => {
    // set up states
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    // set up history
    const history = useHistory();

    useEffect(() => {
        const source = axios.CancelToken.source();
        // on component mount, get orders
        async function getOrders() {
            try {
                const res = await axios.get(
                    process.env.REACT_APP_BACKEND_URL + "orders",
                    { cancelToken: source.token }
                );
                // set state
                setOrders(() => res.data.orders);
                setLoading(false);
            } catch (err) {
                console.log("Order fetch error", err);
            }
        }

        getOrders();

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

    if (loading)
        return (
            <StyledAdminOrders>
                <LoadingSpinner />
            </StyledAdminOrders>
        );

    return (
        <StyledAdminOrders>
            <AdminPageTitle>Orders</AdminPageTitle>
            <StyledOrdersContainer>
                {orders.map((order) => (
                    <AdminOrderCell
                        key={order.id}
                        data={order}
                        handleMarkShipped={handleMarkShipped}
                        handleMarkComplete={handleMarkComplete}
                    />
                ))}
            </StyledOrdersContainer>
        </StyledAdminOrders>
    );
};

export default AdminOrders;
