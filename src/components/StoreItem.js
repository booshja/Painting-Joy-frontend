// dependencies
import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 4px;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    height: 200px;
    width: 165px;
    padding: 1rem;
    margin-bottom: 1rem;
    position: relative;
`;

const StyledImg = styled.img`
    height: 133px;
    width: 110px;
`;

const StyledOverlay = styled.div`
    height: 26px;
    width: 110px;
    background-color: rgba(0, 0, 0, 0.5);
    color: #ffffff;
    font-family: "News Cycle", sans-serif;
    font-size: 1.2rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 4rem;
    left: 1.7rem;
`;

const StyledTitle = styled.h3`
    font-family: "News Cycle", sans-serif;
    font-size: 1.4rem;
    letter-spacing: 1px;
    text-align: center;
`;

const StyledPrice = styled.p`
    font-family: "News Cycle", sans-serif;
    font-size: 1rem;
    letter-spacing: 1px;
    text-align: center;
`;

const StoreItem = ({ item }) => {
    return (
        <StyledDiv>
            <StyledImg src={item.image} alt={item.title} />
            {item.isSold && <StyledOverlay>Sold</StyledOverlay>}
            <StyledTitle>{item.title}</StyledTitle>
            <StyledPrice>
                ${item.price} + ${item.shipping} shipping
            </StyledPrice>
        </StyledDiv>
    );
};

export default StoreItem;
