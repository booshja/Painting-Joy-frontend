// dependencies
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
// components
import {
    AdminDashCell,
    AdminHomepageForm,
    AdminHomepageImageForm,
    AdminPageTitle,
    LoadingSpinner,
} from "../components";
import AdminHeader from "./AdminHeader";
import { StyledP } from "./styles/adminTypography";
import { Link } from "react-router-dom";
// hooks
import { useHistory } from "react-router";
import { useAuth0 } from "@auth0/auth0-react";
// context
import MenuContext from "../context/MenuContext";

const StyledAdminDashboard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f6f7f1;
    min-height: 91.75vh;
    padding-bottom: 2rem;
`;

const StyledCellP = styled(StyledP)`
    margin-bottom: 0.5rem;
`;

const StyledLink = styled(Link)`
    font-family: "News Cycle", sans-serif;
    font-size: 1.2rem;
    text-decoration: underline;
    font-weight: 700;
    letter-spacing: 1px;
    margin-bottom: 0.25rem;
    display: inline;
    max-width: 150px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 1.2;
`;

const StyledBoldP = styled(StyledP)`
    font-size: 1.4rem;
    font-weight: 700;
`;

const StyledOrderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 0.5rem;
    width: 100%;
`;

const StyledError = styled.p`
    color: #990000;
    font-family: "News Cycle", sans-serif;
    font-weight: 700;
    font-size: 1.2rem;
    letter-spacing: 1px;
    padding: 0.5rem;
    text-align: center;
`;

const AdminDashboard = () => {
    // set up state
    const [loading, setLoading] = useState(true);
    const [murals, setMurals] = useState([]);
    const [orders, setOrders] = useState([]);
    const [homepage, setHomepage] = useState({});
    const [error, setError] = useState(null);
    const [step, setStep] = useState(0);
    // set up history
    const history = useHistory();
    // set up hooks
    const { isLoading } = useAuth0();
    // set up context
    const { menuOpen } = useContext(MenuContext);

    useEffect(() => {
        const source = axios.CancelToken.source();
        // on component mount, get data
        async function getData() {
            try {
                const muralRes = await axios.get(
                    process.env.REACT_APP_BACKEND_URL + `murals/`,
                    { cancelToken: source.token }
                );
                const orderRes = await axios.get(
                    process.env.REACT_APP_BACKEND_URL + `orders/`,
                    { cancelToken: source.token }
                );
                const homepageRes = await axios.get(
                    process.env.REACT_APP_BACKEND_URL + `homepage/`,
                    { cancelToken: source.token }
                );
                // set states
                setMurals(() =>
                    muralRes.data.murals.slice(
                        Math.max(muralRes.data.murals.length - 5, 0)
                    )
                );
                setOrders(() =>
                    orderRes.data.orders
                        .slice(Math.max(orderRes.data.orders.length - 5, 0))
                        .reverse()
                );
                setHomepage(homepageRes.data.homepage);
                setLoading(false);
            } catch (err) {
                console.log("Data loading error", err);
                setLoading(false);
            }
        }

        getData();

        return function cleanup() {
            source.cancel();
        };
    }, []);

    const handleDataSubmit = async (data) => {
        // on form submit, send data to API, reload page
        setLoading(true);
        try {
            await axios.put(process.env.REACT_APP_BACKEND_URL + `homepage/`, {
                greeting: data.greeting,
                message: data.message,
            });
            setStep(1);
            setLoading(false);
        } catch (err) {
            setError(
                "Error uploading data, please reload the page and try again."
            );
            console.log("Homepage upload error", err);
            setLoading(false);
        }
    };

    const handleImageSubmit = async (data) => {
        // on image submit, send photo to API, reload page
        setLoading(true);
        const formData = new FormData();
        formData.append("upload", data.upload[0]);
        let res;

        try {
            res = await axios.post(
                process.env.REACT_APP_BACKEND_URL + `homepage/image`,
                formData
            );
        } catch (err) {
            setError(
                "Image upload error. Check that file is not over 5mb and try again."
            );
            console.log("Image upload error", err);
            setLoading(false);
        }
        history.go(0);
    };

    if (loading || isLoading)
        return (
            <StyledAdminDashboard>
                <LoadingSpinner />
            </StyledAdminDashboard>
        );

    return menuOpen ? (
        <AdminHeader />
    ) : (
        <>
            <AdminHeader />
            <main>
                <StyledAdminDashboard>
                    <AdminPageTitle>Welcome back, Beth!</AdminPageTitle>
                    <AdminDashCell
                        title="Murals"
                        linkTo="/admin/murals"
                        footer={true}
                    >
                        {murals.map((mural) => (
                            <StyledCellP key={mural.id}>
                                {mural.title}
                            </StyledCellP>
                        ))}
                    </AdminDashCell>
                    <AdminDashCell title="Edit Homepage" footer={false}>
                        {error && <StyledError>{error}</StyledError>}
                        {step === 0 && (
                            <AdminHomepageForm
                                preloadedValues={{
                                    ...homepage,
                                }}
                                handleDataSubmit={handleDataSubmit}
                                setStep={setStep}
                            />
                        )}
                        {step === 1 && (
                            <AdminHomepageImageForm
                                setStep={setStep}
                                handleImageSubmit={handleImageSubmit}
                                image={
                                    process.env.REACT_APP_BACKEND_URL +
                                    `homepage/image/`
                                }
                            />
                        )}
                    </AdminDashCell>
                    <AdminDashCell
                        title="Orders"
                        linkTo="/admin/orders"
                        footer={true}
                    >
                        <StyledOrderContainer>
                            <StyledBoldP>Order ID:</StyledBoldP>
                            <StyledBoldP>Status:</StyledBoldP>
                        </StyledOrderContainer>
                        {orders.map((order) => (
                            <StyledOrderContainer key={order.id}>
                                <StyledLink to={`/admin/orders/${order.id}`}>
                                    {order.transactionId}
                                </StyledLink>
                                <StyledP>{order.status}</StyledP>
                            </StyledOrderContainer>
                        ))}
                    </AdminDashCell>
                </StyledAdminDashboard>
            </main>
        </>
    );
};

export default AdminDashboard;
