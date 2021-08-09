// dependencies
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
// components
import { GoBack, CartItem } from "../components";
import { Link } from "react-router-dom";
// context
import CartContext from "../context/CartContext";

const StyledCart = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5%;
    min-height: 45vh;
`;

const StyledCartDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    border: 2px solid #207070;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    margin-bottom: 1rem;
`;

const StyledLink = styled(Link)`
    font-family: "News Cycle", sans-serif;
    font-weight: 700;
    font-size: 1.2rem;
    text-decoration: none;
    color: #207070;
    margin-top: 1rem;
`;

const TotalDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0.5rem 0.25rem 0.5rem;
    border: 2px solid #207070;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    align-self: flex-end;
    margin-bottom: 1rem;
`;

const TotalText = styled.p`
    font-family: "News Cycle", sans-serif;
    font-weight: 700;
    font-size: 1.2rem;
    letter-spacing: 1px;
    margin-bottom: 0.25rem;
`;

const StyledSpan = styled.span`
    font-weight: 400;
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
    align-self: flex-end;

    &:hover {
        color: #207070;
        background-color: #ffffff;
    }
`;

const Cart = () => {
    // set up state
    const [shipping, setShipping] = useState(0);
    const [priceTotal, setPriceTotal] = useState(0);
    // set up context
    const { cart } = useContext(CartContext);

    useEffect(() => {
        // on component mount, sum shipping and price
        let shippingTotal = 0;
        let priceTotal = 0;
        for (let item of cart) {
            shippingTotal = shippingTotal + +item.shipping;
            priceTotal = priceTotal + +item.price;
        }
        setShipping(shippingTotal.toFixed(2));
        setPriceTotal(priceTotal.toFixed(2));
    }, [cart]);

    return (
        <StyledCart>
            <GoBack to={"/store"} />
            <StyledCartDiv>
                {cart.length > 0 ? (
                    cart.map((item, idx) => (
                        <CartItem key={`C${idx}-I${item.id}`} item={item} />
                    ))
                ) : (
                    <>
                        <TotalText>There is nothing in your cart.</TotalText>
                        <StyledLink to={"/store"}>Go add something!</StyledLink>
                    </>
                )}
            </StyledCartDiv>
            {cart.length > 0 ? (
                <>
                    <TotalDiv>
                        <TotalText>
                            Shipping: <StyledSpan>${shipping}</StyledSpan>
                        </TotalText>
                        <TotalText>
                            Items: <StyledSpan>${priceTotal}</StyledSpan>
                        </TotalText>
                        <TotalText>
                            Subtotal:{" "}
                            <StyledSpan>${+priceTotal + +shipping}</StyledSpan>
                        </TotalText>
                    </TotalDiv>
                    <StyledButton>Checkout</StyledButton>
                </>
            ) : null}
        </StyledCart>
    );
};

export default Cart;
