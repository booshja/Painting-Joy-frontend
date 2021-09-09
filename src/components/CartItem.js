// dependencies
import React, { useContext } from "react";
import styled from "styled-components";
// context
import CartContext from "../context/CartContext";
// breakpoints
import { breakpoints } from "../breakpoints";

const StyledCartItem = styled.div`
    display: flex;
    align-items: center;
    padding: 1rem 0;
`;

const StyledImg = styled.img`
    width: 40%;
    margin-right: 1rem;
`;

const StyledInfoDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
`;

const StyledText = styled.p`
    font-family: "News Cycle", sans-serif;
    font-size: 1rem;
    letter-spacing: 1px;
    margin-bottom: 0.5rem;

    ${breakpoints("font-size", "rem", [{ 414: 1.2 }])}
`;

const StyledTitle = styled.p`
    font-family: "Barlow Condensed", sans-serif;
    font-size: 1.2rem;
    font-weight: 700;
    letter-spacing: 1px;
    margin-bottom: 1rem;

    ${breakpoints("font-size", "rem", [{ 414: 1.4 }])}
`;

const StyledRemove = styled.button`
    font-family: "News Cycle", sans-serif;
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: 1px;
    color: #207070;
    border: none;
    background-color: transparent;
    padding: 0;

    ${breakpoints("font-size", "rem", [{ 414: 1.2 }])}
`;

const CartItem = ({ item }) => {
    // set up context
    const { removeFromCart } = useContext(CartContext);

    const handleClick = () => {
        // when clicked, remove item from cart
        removeFromCart(item.id);
    };

    return (
        <StyledCartItem>
            <StyledImg
                src={
                    process.env.REACT_APP_BACKEND_URL +
                    `items/item/${item.id}/image`
                }
                alt={item.name}
            />
            <StyledInfoDiv>
                <StyledTitle>{item.name}</StyledTitle>
                <StyledText>Price: ${item.price}</StyledText>
                <StyledText>Shipping: ${item.shipping}</StyledText>
                <StyledRemove onClick={handleClick}>Remove</StyledRemove>
            </StyledInfoDiv>
        </StyledCartItem>
    );
};

export default CartItem;
