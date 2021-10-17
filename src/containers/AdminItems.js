// dependencies
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
// components
import { AdminItemCell, AdminPageTitle, LoadingSpinner } from "../components";
import {
    StyledGreenSoloButton,
    StyledOutlineButton,
} from "./styles/adminButtons";
import { StyledP } from "./styles/adminTypography";
// hooks
import { useHistory } from "react-router";
// breakpoints
import { breakpoints } from "../breakpoints";

const StyledAdminItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f6f7f1;
    min-height: calc(100vh - 60px);
    width: 100%;
    max-width: 800px;
`;

const StyledButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;

    ${breakpoints("align-self", "", [{ 1024: "flex-start" }])}
    ${breakpoints("margin-left", "rem", [{ 1024: 3 }])}
`;

const StyledOutlineBtn = styled(StyledOutlineButton)`
    font-size: 1rem;
    margin-left: 1rem;
`;

const StyledItemsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 85%;
    margin-top: 1rem;
    margin-bottom: 2rem;
`;

const AdminItems = () => {
    // set up states
    const [availableItems, setAvailableItems] = useState([]);
    const [soldOutItems, setSoldOutItems] = useState([]);
    const [showSoldOut, setShowSoldOut] = useState(false);
    const [loading, setLoading] = useState(true);
    // set up history
    const history = useHistory();

    useEffect(() => {
        // get cancel token for aborted axios call
        const source = axios.CancelToken.source();
        // on component mount, get items
        async function getItems() {
            try {
                const res = await axios.get(
                    process.env.REACT_APP_BACKEND_URL + "items",
                    { cancelToken: source.token }
                );
                // filter items into sold out and available
                const soldOut = res.data.items.filter(
                    (item) => item.isSold === true
                );
                const available = res.data.items.filter(
                    (item) => item.isSold === false
                );
                // set states
                setSoldOutItems(() => soldOut);
                setAvailableItems(() => available);
                setLoading(false);
            } catch (err) {
                console.log(err);
                setLoading(false);
            }
        }

        getItems();

        return function cleanup() {
            // cleanup function for aborted axios call
            source.cancel();
        };
    }, []);

    const handleShowSoldOut = () => {
        // flip boolean for showSoldOut
        setShowSoldOut((val) => !val);
    };

    const handleMarkSoldOut = async (id) => {
        // send request to api to set item as sold out, refresh page
        try {
            await axios.patch(
                process.env.REACT_APP_BACKEND_URL + `items/sold/${id}`
            );
        } catch (err) {
            console.log("Sell out error.", err);
        }
        history.go(0);
    };

    const handleDelete = async (id) => {
        // send request to api to delete item, refresh page
        try {
            await axios.delete(
                process.env.REACT_APP_BACKEND_URL + `items/delete/${id}`
            );
        } catch (err) {
            console.log("Delete Error", err);
        }
        history.go(0);
    };

    // if data loading, display loading spinner
    if (loading)
        return (
            <StyledAdminItems>
                <LoadingSpinner />
            </StyledAdminItems>
        );

    return (
        <StyledAdminItems>
            <AdminPageTitle>Items</AdminPageTitle>
            <StyledButtonContainer>
                <StyledGreenSoloButton
                    onClick={() => history.push("/admin/items/new")}
                >
                    Add New Item
                </StyledGreenSoloButton>
                <StyledOutlineBtn
                    color="#207070"
                    onClick={() => handleShowSoldOut()}
                >
                    {showSoldOut ? "See Available Items" : "See Sold Out Items"}
                </StyledOutlineBtn>
            </StyledButtonContainer>
            <StyledItemsContainer>
                {showSoldOut
                    ? soldOutItems.map((item) => (
                          <AdminItemCell
                              key={item.id}
                              data={item}
                              handleDelete={handleDelete}
                              showSoldOut={showSoldOut}
                          />
                      ))
                    : availableItems.map((item) => (
                          <AdminItemCell
                              key={item.id}
                              data={item}
                              handleMarkSoldOut={handleMarkSoldOut}
                              handleDelete={handleDelete}
                              showSoldOut={showSoldOut}
                          />
                      ))}
                {showSoldOut && soldOutItems.length === 0 && (
                    <StyledP>No sold out items!</StyledP>
                )}
                {!showSoldOut && availableItems.length === 0 && (
                    <StyledP>No available items!</StyledP>
                )}
            </StyledItemsContainer>
        </StyledAdminItems>
    );
};

export default AdminItems;
