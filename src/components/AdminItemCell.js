// dependencies
import React from "react";
import styled from "styled-components";
// components
import {
    StyledGreenSoloButton,
    StyledOutlineButton,
} from "../containers/styles/adminButtons";
import { StyledP } from "../containers/styles/adminTypography";
import { StyledCell } from "../containers/styles/adminContainers";
// hooks
import { useHistory } from "react-router";
// breakpoints
import { breakpoints } from "../breakpoints";

const ReStyledCell = styled(StyledCell)`
    width: 100%;

    ${breakpoints("flex-direction", "", [{ 1024: "row" }])}
`;

const StyledInlineBlockP = styled(StyledP)`
    display: inline-block;
    word-break: break-word;
    margin-bottom: 0.5rem;
`;

const StyledBoldP = styled(StyledInlineBlockP)`
    font-weight: 700;
`;

const StyledButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-self: flex-end;
    margin: 1rem 0 0;

    ${breakpoints("align-self", "", [{ 1024: "flex-start" }])}
    ${breakpoints("margin-left", "rem", [{ 1024: 2 }])}
`;

const StyledOutlineBtn = styled(StyledOutlineButton)`
    margin-left: 1rem;
`;

const StyledSoldOutBtn = styled(StyledGreenSoloButton)`
    display: ${(props) => (props.showSoldOut ? "none" : "initial")};
    margin-left: 1rem;
`;

const StyledImg = styled.img`
    display: none;
    height: 150px;

    ${breakpoints("display", "", [{ 1024: "block flex" }])}
`;

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const AdminItemCell = ({
    data,
    handleMarkSoldOut,
    handleDelete,
    showSoldOut,
}) => {
    // set up history
    const history = useHistory();
    // destructure data
    const { id, name, shipping, price, description, quantity, isSold } = data;

    return (
        <ReStyledCell>
            <StyledContainer>
                <StyledBoldP>{name}</StyledBoldP>
                <StyledInlineBlockP>{description}</StyledInlineBlockP>
                {!isSold && (
                    <StyledInlineBlockP>
                        Quantity: {quantity}
                    </StyledInlineBlockP>
                )}
                {isSold && <StyledBoldP>Sold Out!</StyledBoldP>}
                <StyledInlineBlockP>Price: ${price}</StyledInlineBlockP>
                <StyledInlineBlockP>Shipping: ${shipping}</StyledInlineBlockP>
                <StyledInlineBlockP>
                    Total: ${(+shipping + +price).toFixed(2)}
                </StyledInlineBlockP>
                <StyledButtonContainer showSoldOut={showSoldOut}>
                    <StyledOutlineButton
                        color="#a1c9c9"
                        onClick={() => history.push(`/admin/items/edit/${id}`)}
                    >
                        Edit
                    </StyledOutlineButton>
                    <StyledSoldOutBtn
                        onClick={() => handleMarkSoldOut(id)}
                        showSoldOut={showSoldOut}
                    >
                        Mark Sold Out
                    </StyledSoldOutBtn>
                    <StyledOutlineBtn
                        color="#db9487"
                        onClick={() => handleDelete(id)}
                    >
                        Delete
                    </StyledOutlineBtn>
                </StyledButtonContainer>
            </StyledContainer>
            <StyledImg
                src={
                    process.env.REACT_APP_BACKEND_URL + `items/item/${id}/image`
                }
                alt="Sale Item"
            />
        </ReStyledCell>
    );
};

export default AdminItemCell;
