// dependencies
import React from "react";
import styled from "styled-components";
// components
import { GoBack, PageTitle } from "../components";
// assets
import YayImg from "../assets/jen-theodore-ualbj7tyJH0-unsplash.jpg";
// breakpoints
import { breakpoints } from "../breakpoints";

const StyledCheckoutCancel = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledP = styled.p`
    font-family: "News Cycle", sans-serif;
    font-size: 1.2rem;
    text-align: center;
    letter-spacing: 1px;
    width: 80%;
    line-height: 1.2;

    ${breakpoints("font-size", "rem", [{ 414: 1.4 }])}
`;

const StyledImg = styled.img`
    width: 80%;
`;

const CheckoutSuccess = () => {
    return (
        <StyledCheckoutCancel>
            <PageTitle>Congrats!</PageTitle>
            <StyledP>
                It's all yours! You'll receive a receipt from Stripe (our
                payment proccessor) shortly, and we'll send you an email once
                your order has shipped!
            </StyledP>
            <GoBack to={"/"} />
            <StyledImg src={YayImg} alt="Excited child cheering with arms up" />
        </StyledCheckoutCancel>
    );
};

export default CheckoutSuccess;
