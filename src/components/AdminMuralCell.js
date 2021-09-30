// dependencies
import React from "react";
import styled from "styled-components";
// components
import { AdminTripleButton } from "../components";
import { StyledCell } from "../containers/styles/adminContainers";
import { StyledP } from "../containers/styles/adminTypography";
// breakpoints
import { breakpoints } from "../breakpoints";

const ReStyledCell = styled(StyledCell)`
    ${breakpoints("flex-direction", "", [{ 1024: "row" }])}
`;

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
`;

const StyledMarginP = styled(StyledP)`
    margin-bottom: 0.5rem;
`;

const StyledBoldP = styled(StyledMarginP)`
    font-weight: 700;
`;

const StyledImg = styled.img`
    display: none;
    height: 100px;

    ${breakpoints("display", "", [{ 1024: "block flex" }])}
`;

const AdminMuralCell = ({
    data,
    handleArchive,
    handleUnArchive,
    handleDelete,
    showArchived,
}) => {
    const { id, title, description } = data;
    return (
        <ReStyledCell>
            <StyledContainer>
                <StyledBoldP>{title}</StyledBoldP>
                <StyledP>{description}</StyledP>
                <AdminTripleButton
                    id={id}
                    handleArchive={handleArchive}
                    handleUnArchive={handleUnArchive}
                    handleDelete={handleDelete}
                    showArchived={showArchived}
                />
            </StyledContainer>
            <StyledImg
                src={
                    process.env.REACT_APP_BACKEND_URL +
                    `murals/mural/${id}/image/1`
                }
                alt="Mural Display Image"
            />
        </ReStyledCell>
    );
};

export default AdminMuralCell;
