// dependencies
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";
// components
import { GoBack } from "../components";

const StyledStoreItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 5%;
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
    const [isLoading, setIsLoading] = useState(true);
    const [item, setItem] = useState({});
    const { itemId } = useParams();

    useEffect(() => {
        async function getItem() {
            const res = await axios(
                process.env.REACT_APP_BACKEND_URL + `items/item/${itemId}`
            );
            setItem(() => res.data.item);
        }
        getItem();
        setIsLoading(false);
    }, []);

    const handleClick = () => {
        // TODO - add item to cart
        // TODO - need to add state for cart in App
        // TODO - need to add cart to mobile menu
    };

    if (isLoading) {
        return <p>Loading...</p>;
    }

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
            <StyledText>
                ${item.price} + ${item.shipping} shipping
            </StyledText>
            <StyledButton onClick={handleClick}>Buy Me!</StyledButton>
        </StyledStoreItem>
    );
};

export default StoreItem;
