// dependencies
import React from "react";
import styled from "styled-components";
// components
import { StyledCell } from "../containers/styles/adminContainers";
import { StyledP } from "../containers/styles/adminTypography";
import { Link } from "react-router-dom";

const StyledAdminDashCell = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    width: 95%;
    align-self: flex-end;
`;

const StyledDashCell = styled(StyledCell)`
    width: 95%;
    border-width: 2px;
    background-color: ${(props) => props.bgColor};
`;

const StyledBoldP = styled(StyledP)`
    font-weight: 700;
    font-size: 1.4rem;
    color: #ffffff;
`;

const StyledLink = styled(Link)`
    font-family: "News Cycle", sans-serif;
    font-size: 1.4rem;
    color: #ffffff;
    font-weight: 700;
    letter-spacing: 1px;
`;

const AdminDashCell = ({ children, title, linkTo, footer, data }) => {
    return (
        <StyledAdminDashCell>
            <StyledDashCell bgColor="#db9487">
                <StyledBoldP>{title}</StyledBoldP>
            </StyledDashCell>
            <StyledDashCell bgColor="#ffffff">{children}</StyledDashCell>
            {footer ? (
                <StyledDashCell bgColor="#db9487">
                    <StyledLink to={linkTo}>See All &gt;</StyledLink>
                </StyledDashCell>
            ) : null}
        </StyledAdminDashCell>
    );
};

export default AdminDashCell;
