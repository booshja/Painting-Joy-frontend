// dependencies
import React from "react";
import styled from "styled-components";
// components
import { StyledOutlineButton } from "../containers/styles/adminButtons";
import { StyledP } from "../containers/styles/adminTypography";
import { StyledCell } from "../containers/styles/adminContainers";

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
    width: ${(props) => (props.showArchived ? "63%" : "55%")};
    align-self: flex-end;
    margin: 1rem 0 0;
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
                        Unarchive
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
