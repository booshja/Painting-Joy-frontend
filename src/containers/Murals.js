// dependencies
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
// components
import { LoadingSpinner, PageTitle } from "../components";
// hooks
import { useHistory } from "react-router-dom";
// breakpoints
import { breakpoints } from "../breakpoints";

const StyledMurals = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;

    ${breakpoints("min-height", "vh", [{ 768: 50 }])}
`;

const StyledList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    margin: 1rem 0;

    ${breakpoints("flex-direction", "", [{ 768: "row" }])}
    ${breakpoints("flex-wrap", "", [{ 768: "wrap" }])}

    div:nth-of-type(odd) {
        ${breakpoints("margin-right", "rem", [{ 768: 3 }])}
    }
`;

const StyledMural = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    ${breakpoints("width", "%", [{ 768: 45 }])}
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

    ${breakpoints("font-size", "rem", [{ 414: 2 }, { 768: 2.2 }])}
`;

const Murals = () => {
    // set up state
    const [loading, setLoading] = useState(true);
    const [murals, setMurals] = useState([]);
    // set up history
    const history = useHistory();

    useEffect(() => {
        // get cancel token for aborted axios call
        const source = axios.CancelToken.source();

        async function getData() {
            // on mount get mural data
            try {
                const muralRes = await axios.get(
                    process.env.REACT_APP_BACKEND_URL + "murals/active",
                    { cancelToken: source.token }
                );
                setMurals(muralRes.data.murals);
                setLoading(false);
            } catch (err) {
                console.log(err);
            }
        }
        getData();

        return function cleanup() {
            // cleanup function for aborted axios call
            source.cancel();
        };
    }, []);

    const handleClick = (e) => {
        // on click send the user to the mural they clicked on
        const id = e.target.id;
        history.push(`/murals/${id}`);
    };

    // if data loading display loading spinner
    if (loading)
        return (
            <StyledMurals>
                <LoadingSpinner />
            </StyledMurals>
        );

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
