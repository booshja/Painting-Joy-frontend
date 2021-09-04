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
    justify-content: space-between;
    width: ${(props) => (props.showSoldOut ? "45%" : "100%")};
    align-self: flex-end;
    margin: 1rem 0 0;
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
        <StyledCell>
            <StyledBoldP>{name}</StyledBoldP>
            <StyledInlineBlockP>{description}</StyledInlineBlockP>
            {!isSold && (
                <StyledInlineBlockP>Quantity: {quantity}</StyledInlineBlockP>
            )}
            {isSold && <StyledBoldP>Sold Out!</StyledBoldP>}
            <StyledInlineBlockP>Price: ${price}</StyledInlineBlockP>
            <StyledInlineBlockP>Shipping: ${shipping}</StyledInlineBlockP>
            <StyledInlineBlockP>
                Total: ${(+shipping + +price).toFixed(2)}
            </StyledInlineBlockP>
            <StyledButtonContainer showSoldOut={showSoldOut}>
                {showSoldOut ? (
                    <>
                        <StyledOutlineButton
                            color="#a1c9c9"
                            onClick={() =>
                                history.push(`/admin/items/edit/${id}`)
                            }
                        >
                            Edit
                        </StyledOutlineButton>
                        <StyledOutlineButton
                            color="#db9487"
                            onClick={() => handleDelete(id)}
                        >
                            Delete
                        </StyledOutlineButton>
                    </>
                ) : (
                    <>
                        <StyledOutlineButton
                            color="#a1c9c9"
                            onClick={() =>
                                history.push(`/admin/items/edit/${id}`)
                            }
                        >
                            Edit
                        </StyledOutlineButton>
                        <StyledGreenSoloButton
                            onClick={() => handleMarkSoldOut(id)}
                        >
                            Mark Sold Out
                        </StyledGreenSoloButton>
                        <StyledOutlineButton
                            color="#db9487"
                            onClick={() => handleDelete(id)}
                        >
                            Delete
                        </StyledOutlineButton>
                    </>
                )}
            </StyledButtonContainer>
        </StyledCell>
    );
};

export default AdminItemCell;
