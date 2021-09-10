// dependencies
import React from "react";
import styled from "styled-components";
// components
import { StyledOutlineButton } from "../containers/styles/adminButtons";
import { StyledP } from "../containers/styles/adminTypography";
import { StyledCell } from "../containers/styles/adminContainers";
// breakpoints
import { breakpoints } from "../breakpoints";

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
    width: 60%;
    align-self: flex-end;
    margin: 1rem 0 0;

    ${breakpoints("width", "%", [{ 414: 50 }])}
`;

const AdminMessageCell = ({
    data,
    handleArchive,
    handleUnArchive,
    handleDelete,
    showArchived,
}) => {
    const { id, name, email, message } = data;

    return (
        <StyledCell>
            <StyledBoldP>{name}</StyledBoldP>
            <StyledInlineBlockP>{email}</StyledInlineBlockP>
            <StyledInlineBlockP>{message}</StyledInlineBlockP>
            <StyledButtonContainer showArchived={showArchived}>
                {showArchived ? (
                    <StyledOutlineButton
                        color="#a1c9c9"
                        onClick={() => handleUnArchive(id)}
                    >
                        Activate
                    </StyledOutlineButton>
                ) : (
                    <StyledOutlineButton
                        color="#a1c9c9"
                        onClick={() => handleArchive(id)}
                    >
                        Archive
                    </StyledOutlineButton>
                )}
                <StyledOutlineButton
                    color="#db9487"
                    onClick={() => handleDelete(id)}
                >
                    Delete
                </StyledOutlineButton>
            </StyledButtonContainer>
        </StyledCell>
    );
};

export default AdminMessageCell;
