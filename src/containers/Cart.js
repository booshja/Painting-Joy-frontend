// dependencies
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
// components
import { GoBack, CartItem } from "../components";
import { Link, useHistory } from "react-router-dom";
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
    const { cart, setOrderId } = useContext(CartContext);
    // set up history
    const history = useHistory();

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

    const handleClick = () => {
        const checkCart = async () => {
            // when "Checkout" button clicked create order,
            try {
                const res = await axios.post(
                    process.env.REACT_APP_BACKEND_URL + "orders/checkout",
                    cart
                );
                // if items not added, abort order and send user to cart error page
                if (res.data.notAdded.length > 0) {
                    await axios.delete(
                        process.env.REACT_APP_BACKEND_URL +
                            `orders/order/${res.data.order.id}/abort`
                    );
                    history.push("/cart/error");
                } else {
                    // if no cart error, set state for order id and send user
                    // to next step of checkout process
                    setOrderId(res.data.order.id);
                    history.push("/checkout");
                }
            } catch (err) {
                console.log("Checkout Error:", err);
                history.push("/cart");
            }
        };
        // check cart for items that are out of stock
        checkCart();
        // if no errors, send user to next step of checkout
        history.push(`/checkout`);
    };

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
                            <StyledSpan>
                                ${(+priceTotal + +shipping).toFixed(2)}
                            </StyledSpan>
                        </TotalText>
                    </TotalDiv>
                    <StyledButton onClick={handleClick}>Checkout</StyledButton>
                </>
            ) : null}
        </StyledCart>
    );
};

export default Cart;
