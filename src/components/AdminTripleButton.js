// dependencies
import React from "react";
import styled from "styled-components";
// hooks
import { useHistory } from "react-router";
// breakpoints
import { breakpoints } from "../breakpoints";

const StyledButtonContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 1rem;
    align-self: center;

    ${breakpoints("align-self", "", [{ 1024: "flex-start" }])}
    ${breakpoints("margin-left", "rem", [{ 1024: 2 }])}
`;

const StyledLeftButton = styled.button`
    border: 2px solid #207070;
    border-radius: 4px 0 0 4px;
    background-color: #207070;
    color: #ffffff;
    font-family: "News Cycle", sans-serif;
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: 1px;
    padding: 2.5px 24px;
    cursor: pointer;

    &:hover {
        color: #207070;
        background-color: #ffffff;
    }
`;

const StyledMiddleButton = styled.button`
    border: none;
    border-top: 2px solid #207070;
    border-bottom: 2px solid #207070;
    color: #207070;
    background-color: #ffffff;
    font-family: "News Cycle", sans-serif;
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: 1px;
    padding: 2.5px 24px;
    cursor: pointer;

    &:hover {
        color: #ffffff;
        background-color: #207070;
    }
`;

const StyledRightButton = styled.button`
    border: 2px solid #db9487;
    background-color: #db9487;
    color: #ffffff;
    border-radius: 0 4px 4px 0;
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: 1px;
    padding: 2.5px 24px;
    font-family: "News Cycle", sans-serif;
    cursor: pointer;

    &:hover {
        color: #db9487;
        background-color: #ffffff;
    }
`;

const AdminTripleButton = ({
    id,
    handleArchive,
    handleUnArchive,
    handleDelete,
    showArchived,
}) => {
    // set up history
    const history = useHistory();

    return (
        <StyledButtonContainer>
            <StyledLeftButton
                onClick={() => history.push(`/admin/murals/edit/${id}`)}
            >
                Edit
            </StyledLeftButton>
            <StyledMiddleButton
                onClick={() =>
                    showArchived ? handleUnArchive(id) : handleArchive(id)
                }
            >
                {showArchived ? "Unarchive" : "Archive"}
            </StyledMiddleButton>
            <StyledRightButton onClick={() => handleDelete(id)}>
                Delete
            </StyledRightButton>
        </StyledButtonContainer>
    );
};

export default AdminTripleButton;
