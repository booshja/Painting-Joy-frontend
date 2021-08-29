// dependencies
import React from "react";
import styled from "styled-components";
// components
import { AdminTripleButton } from "../components";
import { StyledCell } from "../containers/styles/adminContainers";
import { StyledP } from "../containers/styles/adminTypography";

const StyledMarginP = styled(StyledP)`
    margin-bottom: 0.5rem;
`;

const StyledBoldP = styled(StyledMarginP)`
    font-weight: 700;
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
        <StyledCell>
            <StyledBoldP>{title}</StyledBoldP>
            <StyledP>{description}</StyledP>
            <AdminTripleButton
                id={id}
                handleArchive={handleArchive}
                handleUnArchive={handleUnArchive}
                handleDelete={handleDelete}
                showArchived={showArchived}
            />
        </StyledCell>
    );
};

export default AdminMuralCell;
