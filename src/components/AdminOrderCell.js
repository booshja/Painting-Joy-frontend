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
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
    font-family: "News Cycle", sans-serif;
    font-size: 1.4rem;
    line-height: 1.2;
    font-weight: 700;
    color: #207070;
    text-decoration: none;
    display: inline;
    margin: 0.5rem 0 0.5rem 1rem;
    max-width: 250px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const StyledBoldP = styled(StyledP)`
    font-weight: 700;
    display: inline;
`;

const StyledText = styled(StyledP)`
    margin-bottom: 0.5rem;
`;

const StyledOutlineBtn = styled(StyledOutlineButton)`
    font-size: 1rem;
    margin-right: 1rem;

    &:disabled {
        color: #dadada;
        border: 2px solid #dadada;
    }
`;

const StyledGreenSoloBtn = styled(StyledGreenSoloButton)`
    &:disabled {
        background-color: #dadada;
    }
`;

const StyledA = styled.a`
    font-family: "News Cycle", sans-serif;
    font-size: 1.2rem;
    font-weight: 700;
    color: #fb9487;
    text-decoration: none;
    margin: 0.5rem 0 1rem 0;
`;

const StyledButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-self: center;
`;

const AdminOrderCell = ({ data, handleMarkShipped, handleMarkComplete }) => {
    // destructure data
    const { id, email, transactionId, status, amount } = data;

    return (
        <StyledCell>
            <StyledBoldP>Order:</StyledBoldP>
            <StyledLink to={`/admin/orders/${id}`}>#{transactionId}</StyledLink>
            <StyledText>Paid: ${amount}</StyledText>
            <StyledText>Status: {status}</StyledText>
            <StyledA href={`mailto:${email}`}>Email Customer</StyledA>
            <StyledButtonContainer>
                <StyledOutlineBtn
                    color="#207a7a"
                    onClick={() => handleMarkShipped(id)}
                    disabled={status === "Confirmed" ? false : true}
                >
                    Mark Shipped
                </StyledOutlineBtn>
                <StyledGreenSoloBtn
                    onClick={() => handleMarkComplete(id)}
                    disabled={status === "Shipped" ? false : true}
                >
                    Mark Complete
                </StyledGreenSoloBtn>
            </StyledButtonContainer>
        </StyledCell>
    );
};

export default AdminOrderCell;
