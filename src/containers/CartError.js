// dependencies
import React from "react";
import styled from "styled-components";
// components
import { GoBack, PageTitle } from "../components";
// assets
import OopsImg from "../assets/jelleke-vanooteghem-kabtmcdcAbk-unsplash.jpg";
// breakpoints
import { breakpoints } from "../breakpoints";

const StyledCartError = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StyledP = styled.div`
    font-family: "News Cycle", sans-serif;
    font-size: 1.2rem;
    text-align: center;
    line-height: 1.2;
    width: 80%;
    margin-bottom: 1rem;

    ${breakpoints("font-size", "rem", [{ 414: 1.4 }])}
`;

const StyledImg = styled.img`
    width: 80%;
`;

const CartError = () => {
    // error page for items out of stock in cart upon checkout
    return (
        <StyledCartError>
            <PageTitle>Uh Oh</PageTitle>
            <StyledP>
                Looks like someone else snagged something you were looking at
                first, sorry!
            </StyledP>
            <StyledP>
                We've updated your cart, go ahead and check it out.
            </StyledP>
            <GoBack to="/cart" />
            <StyledImg
                src={OopsImg}
                alt="Child with hands over their mouth with an oops face"
            />
        </StyledCartError>
    );
};

export default CartError;
