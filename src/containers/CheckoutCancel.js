// dependencies
import React from "react";
import styled from "styled-components";
// components
import { GoBack, PageTitle } from "../components";
// assets
import OopsImg from "../assets/received_2960958014233084.jpeg";

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
`;

const StyledImg = styled.img`
    width: 80%;
`;

const CheckoutCancel = () => {
    return (
        <StyledCheckoutCancel>
            <PageTitle>Order Cancelled</PageTitle>
            <StyledP>
                Uh oh! Looks like something went wrong or the order was
                cancelled. Please try again!
            </StyledP>
            <GoBack to={"/cart"} />
            <StyledImg
                src={OopsImg}
                alt="Dispondent and confused child on the ground"
            />
        </StyledCheckoutCancel>
    );
};

export default CheckoutCancel;
