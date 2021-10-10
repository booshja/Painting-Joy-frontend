// dependencies
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
// hooks
import { useHistory, useParams } from "react-router-dom";
// components
import { GoBack, LoadingSpinner } from "../components";
// context
import CartContext from "../context/CartContext";
// breakpoints
import { breakpoints } from "../breakpoints";

const StyledStoreItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 5%;
    min-height: 45vh;

    ${breakpoints("padding-bottom", "rem", [{ 1024: 2 }])}
`;

const StyledImg = styled.img`
    width: 100%;

    ${breakpoints("width", "%", [{ 1024: 70 }])}
`;

const StyledTitle = styled.h1`
    font-family: "News Cycle", sans-serif;
    font-size: 1.8rem;
    letter-spacing: 1px;
    font-weight: 700;
    align-self: flex-start;
    margin: 1rem 0;

    ${breakpoints("margin-left", "%", [{ 1024: 15 }])}
`;

const StyledText = styled.p`
    font-family: "News Cycle", sans-serif;
    font-size: 1.4rem;
    letter-spacing: 1px;
    align-self: flex-start;
    text-align: left;
    line-height: 1.2;
    margin-bottom: 1rem;
    width: 90%;

    ${breakpoints("width", "%", [{ 1024: 70 }])}
    ${breakpoints("margin-left", "%", [{ 1024: 15 }])}
`;

const StyledButton = styled.button`
    background-color: #207070;
    border: 2px solid #207070;
    border-radius: 4px;
    color: #ffffff;
    font-family: "News Cycle", sans-serif;
    font-weight: 700;
    font-size: 1.2rem;
    letter-spacing: 1px;
    padding: 2.5px 10px;
    align-self: flex-start;

    &:hover {
        color: #207070;
        background-color: #ffffff;
        cursor: pointer;
    }

    ${breakpoints("font-size", "rem", [{ 768: 1.4 }])}
    ${breakpoints("margin-left", "%", [{ 1024: 15 }])}
`;

const StoreItem = () => {
    // set up states
    const [loading, setLoading] = useState(true);
    const [item, setItem] = useState({});
    // set up history
    const history = useHistory();
    // get itemId from query string
    const { itemId } = useParams();
    // get setLocalStorageCart from Context
    const { setLocalStorageCart } = useContext(CartContext);

    useEffect(() => {
        // get cancel token for aborted axios call
        const source = axios.CancelToken.source();

        async function getItem() {
            // when component mounts, get the item data
            try {
                const res = await axios.get(
                    process.env.REACT_APP_BACKEND_URL + `items/item/${itemId}`,
                    { cancelToken: source.token }
                );
                setItem(() => res.data.item);

                setLoading(false);
            } catch (err) {
                console.log("Item loading error", err);
                setLoading(false);
            }
        }
        getItem();

        return function cleanup() {
            // cleanup function for aborted axios call
            source.cancel();
        };
    }, []);

    const handleClick = () => {
        // add item to cart state
        setLocalStorageCart((cart) => [...cart, item]);
        history.push("/cart");
    };

    // if data loading, display loading spinner
    if (loading)
        return (
            <StyledStoreItem>
                <LoadingSpinner />
            </StyledStoreItem>
        );

    return (
        <StyledStoreItem>
            <GoBack to={"/store"} />
            <StyledImg
                src={
                    process.env.REACT_APP_BACKEND_URL +
                    `items/item/${itemId}/image`
                }
                alt={item.title}
            />
            <StyledTitle>{item.name}</StyledTitle>
            <StyledText>{item.description}</StyledText>
            {item.isSold ? (
                <>
                    <StyledText>${item.price}</StyledText>
                    <StyledText>Sold out!</StyledText>
                </>
            ) : (
                <>
                    <StyledText>
                        ${item.price} + ${item.shipping} shipping
                    </StyledText>
                    <StyledText>Amount Available: {item.quantity}</StyledText>
                    <StyledButton onClick={handleClick}>Buy Me!</StyledButton>
                </>
            )}
        </StyledStoreItem>
    );
};

export default StoreItem;
