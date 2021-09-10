// dependencies
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
// components
import { GoBack, LoadingSpinner } from "../components";
import { Link } from "react-router-dom";
// hooks
import { useParams } from "react-router-dom";
// breakpoints
import { breakpoints } from "../breakpoints";

const StyledMural = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 50vh;
`;

const StyledTitle = styled.h1`
    font-family: "Barlow Condensed", sans-serif;
    font-weight: 700;
    font-size: 1.8rem;
    margin-bottom: 0.75rem;
    text-align: center;

    ${breakpoints("font-size", "rem", [{ 414: 2.2 }])}
`;

const StyledDisplayImg = styled.img`
    width: 90%;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);

    ${breakpoints("width", "%", [{ 1024: 70 }])}
`;

const StyledSelectContainer = styled.div`
    display: flex;
    align-items: baseline;
    align-self: flex-start;
    margin: 0 0 0.5rem 5%;

    ${breakpoints("margin-left", "%", [{ 1024: 15 }])}
`;

const StyledSelectImg = styled.img`
    height: 50px;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;

    ${breakpoints("height", "px", [{ 414: 75 }])}
`;

const StyledDescription = styled.p`
    font-family: "News Cycle", sans-serif;
    font-size: 1.2rem;
    text-align: center;
    margin: 0.75rem 5% 1rem 5%;

    ${breakpoints("font-size", "rem", [{ 414: 1.6 }])}
`;

const StyledBar = styled.div`
    width: 50%;
    height: 2px;
    background-color: #207070;
    margin: 6rem 0 0.5rem 0;
`;

const StyledLink = styled(Link)`
    font-family: "News Cycle", sans-serif;
    font-size: 1.2rem;
    font-weight: 700;
    text-align: center;
    color: #207070;
    margin-bottom: 2rem;

    ${breakpoints("font-size", "rem", [{ 414: 1.4 }])}
`;

const Mural = () => {
    const { muralId } = useParams();
    const [display, setDisplay] = useState(1);
    const [mural, setMural] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const source = axios.CancelToken.source();
        async function getMural() {
            const res = await axios.get(
                process.env.REACT_APP_BACKEND_URL + `murals/mural/${muralId}`,
                { cancelToken: source.token }
            );
            setMural(res.data.mural);
            setLoading(false);
        }
        getMural();

        return function cleanup() {
            source.cancel();
        };
    }, []);

    const handleClick = (e) => {
        setDisplay(e.target.id);
    };

    if (loading)
        return (
            <StyledMural>
                <LoadingSpinner />
            </StyledMural>
        );

    return (
        <StyledMural>
            <GoBack to={"/murals"} />
            <StyledTitle>{mural.title}</StyledTitle>
            <StyledDisplayImg
                src={
                    process.env.REACT_APP_BACKEND_URL +
                    `murals/mural/${muralId}/image/${display}`
                }
                alt={mural.title}
            />
            <StyledSelectContainer>
                <StyledSelectImg
                    src={
                        process.env.REACT_APP_BACKEND_URL +
                        `murals/mural/${muralId}/image/1`
                    }
                    alt={mural.title + " view 1"}
                    id="1"
                    onClick={(e) => handleClick(e)}
                />
                {mural.image2 && (
                    <StyledSelectImg
                        src={
                            process.env.REACT_APP_BACKEND_URL +
                            `murals/mural/${muralId}/image/2`
                        }
                        alt={mural.title + " view 2"}
                        id="2"
                        onClick={(e) => handleClick(e)}
                    />
                )}
                {mural.image3 && (
                    <StyledSelectImg
                        src={
                            process.env.REACT_APP_BACKEND_URL +
                            `murals/mural/${muralId}/image/3`
                        }
                        alt={mural.title + " view 3"}
                        id="3"
                        onClick={(e) => handleClick(e)}
                    />
                )}
            </StyledSelectContainer>
            <StyledDescription>{mural.description}</StyledDescription>
            <StyledBar />
            <StyledDescription>
                Want to talk about what I could paint for you?
            </StyledDescription>
            <StyledLink to="/contact">Contact Me Here!</StyledLink>
        </StyledMural>
    );
};

export default Mural;
