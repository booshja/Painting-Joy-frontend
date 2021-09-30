// dependencies
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
// components
import { AdminOrderCell, AdminPageTitle, LoadingSpinner } from "../components";
import AdminHeader from "./AdminHeader";
// hooks
import { useHistory } from "react-router";
import { useAuth0 } from "@auth0/auth0-react";
// context
import MenuContext from "../context/MenuContext";
// breakpoints
import { breakpoints } from "../breakpoints";

const StyledAdminOrders = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f6f7f1;
    width: 100%;
    max-width: 700px;
    min-height: calc(100vh - 60px);
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
    // set up hooks
    const { isLoading, getAccessTokenSilently } = useAuth0();
    // set up context
    const { menuOpen } = useContext(MenuContext);

    useEffect(() => {
        const source = axios.CancelToken.source();
        // on component mount, get orders
        async function getOrders() {
            try {
                const token = await getAccessTokenSilently();

                const res = await axios.get(
                    process.env.REACT_APP_BACKEND_URL + "orders",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                        cancelToken: source.token,
                    }
                );
                // set state
                setOrders(() => res.data.orders.reverse());
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
            const token = await getAccessTokenSilently();

            await axios.patch(
                process.env.REACT_APP_BACKEND_URL + `orders/order/${id}/ship`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
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
                    `orders/order/${id}/complete`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
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
