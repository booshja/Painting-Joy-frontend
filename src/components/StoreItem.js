// dependencies
import React from "react";
import styled from "styled-components";
// hooks
import { useHistory } from "react-router";
// breakpoints
import { breakpoints } from "../breakpoints";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 4px;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    width: 165px;
    padding: 1rem;
    margin-bottom: 1rem;
    position: relative;
    cursor: pointer;

    ${breakpoints("width", "px", [{ 414: 195 }])}
`;

const StyledImg = styled.img`
    object-fit: cover;
    width: 110px;
    height: auto;
    margin-bottom: 0.5rem;

    ${breakpoints("width", "px", [{ 414: 150 }])}
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

    ${breakpoints("height", "px", [{ 414: 32 }])}
    ${breakpoints("width", "px", [{ 414: 150 }])}
    ${breakpoints("font-size", "rem", [{ 414: 1.4 }])}
    ${breakpoints("top", "rem", [{ 414: 5 }])}
    ${breakpoints("left", "rem", [{ 414: 1.4 }])}
`;

const StyledTitle = styled.h3`
    font-family: "News Cycle", sans-serif;
    font-size: 1.1rem;
    font-weight: 700;
    letter-spacing: 1px;
    text-align: center;
`;

const StyledPrice = styled.p`
    font-family: "News Cycle", sans-serif;
    font-size: 1rem;
    letter-spacing: 1px;
    text-align: center;
    padding-top: 0.25rem;
`;

const StoreItem = ({ item }) => {
    // set up history
    const history = useHistory();

    const handleClick = (e) => {
        // when clicked push user to single item page
        history.push(`/store/item/${e.target.id.slice(2)}`);
    };

    return (
        <StyledDiv id={"d-" + item.id} onClick={(e) => handleClick(e)}>
            <StyledImg
                src={
                    process.env.REACT_APP_BACKEND_URL +
                    `items/item/${item.id}/image`
                }
                alt={item.name}
                id={"i-" + item.id}
            />
            {item.isSold && (
                <StyledOverlay id={"o-" + item.id}>Sold</StyledOverlay>
            )}
            <StyledTitle id={"t-" + item.id}>{item.name}</StyledTitle>
            {item.isSold ? (
                <StyledPrice id={"p-" + item.id}>${item.price}</StyledPrice>
            ) : (
                <StyledPrice id={"p-" + item.id}>
                    ${item.price} + ${item.shipping} shipping
                </StyledPrice>
            )}
        </StyledDiv>
    );
};

export default StoreItem;
