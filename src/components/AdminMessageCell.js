// dependencies
import React from "react";
import styled from "styled-components";

const StyledCell = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border: 1px solid #207070;
    width: 100%;
    padding: 1rem;
    background-color: #ffffff;
`;

const StyledP = styled.p`
    font-size: 1.2rem;
    font-family: "News Cycle", sans-serif;
    letter-spacing: 1px;
    display: inline-block;
    word-break: break-word;
    margin-bottom: 0.5rem;
`;

const StyledBoldP = styled(StyledP)`
    font-weight: 700;
`;

const StyledOutlineButton = styled.button`
    border-radius: 4px;
    background-color: #ffffff;
    font-family: "News Cycle", sans-serif;
    font-weight: 700;
    font-size: 1.2rem;
    letter-spacing: 1px;
    padding: 2.5px 5px;
    border: 2px solid ${(props) => props.color};
    color: ${(props) => props.color};
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
            <StyledP>{email}</StyledP>
            <StyledP>{message}</StyledP>
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
