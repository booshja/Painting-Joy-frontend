// dependencies
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
// components
import { PageTitle } from "../components";
// context
import MuralsContext from "../context/MuralsContext";

const StyledMurals = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
`;

const StyledList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    margin: 1rem 0;
`;

const StyledMural = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const StyledImg = styled.img`
    width: 100%;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
`;

const StyledTitle = styled.h3`
    font-family: "Barlow Condensed", sans-serif;
    font-weight: 700;
    font-size: 1.6rem;
    letter-spacing: 1px;
    margin: 0.25rem 0 1rem 0;
    align-self: flex-start;
`;

const Murals = () => {
    const { murals } = useContext(MuralsContext);
    const history = useHistory();

    const handleClick = (e) => {
        const id = e.target.id;
        history.push(`/murals/${id}`);
    };
    return (
        <StyledMurals>
            <PageTitle>Murals</PageTitle>
            <StyledList>
                {murals.map((mural) => (
                    <StyledMural key={"m" + mural.id}>
                        <StyledImg
                            onClick={(e) => handleClick(e)}
                            src={`http://localhost:5000/murals/mural/${mural.id}/image/1`}
                            alt={mural.title}
                            id={mural.id}
                            key={mural.id}
                        />
                        <StyledTitle key={"t" + mural.id}>
                            {mural.title}
                        </StyledTitle>
                    </StyledMural>
                ))}
            </StyledList>
        </StyledMurals>
    );
};

export default Murals;