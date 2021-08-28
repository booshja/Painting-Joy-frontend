// dependencies
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
// components
import { GoBack, LoadingSpinner } from "../components";
// context
import CartContext from "../context/CartContext";

const StyledStoreItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 5%;
    min-height: 45vh;
`;

const StyledImg = styled.img`
    width: 100%;
`;

const StyledTitle = styled.h1`
    font-family: "News Cycle", sans-serif;
    font-size: 1.8rem;
    letter-spacing: 1px;
    font-weight: 700;
    align-self: flex-start;
    margin: 1rem 0;
`;

const StyledText = styled.p`
    font-family: "News Cycle", sans-serif;
    font-size: 1.4rem;
    letter-spacing: 1px;
    align-self: flex-start;
    text-align: left;
    line-height: 2rem;
    margin-bottom: 1rem;
    width: 90%;
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
    }
`;

const StoreItem = () => {
    // set up states
    const [Loading, setLoading] = useState(true);
    const [item, setItem] = useState({});
    // set up history
    const history = useHistory();
    // get itemId from query string
    const { itemId } = useParams();
    // get setLocalStorageCart from Context
    const { setLocalStorageCart } = useContext(CartContext);

    useEffect(() => {
        const source = axios.CancelToken.source();
        // when component mounts, get the item data
        async function getItem() {
            const res = await axios(
                process.env.REACT_APP_BACKEND_URL + `items/item/${itemId}`,
                { cancelToken: source.token }
            );
            setItem(() => res.data.item);
        }
        getItem();
        setLoading(false);

        return function cleanup() {
            source.cancel();
        };
    }, []);

    const handleClick = () => {
        // add item to cart state
        setLocalStorageCart((cart) => [...cart, item]);
        history.push("/cart");
    };

    if (Loading)
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
