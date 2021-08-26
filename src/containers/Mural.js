// dependencies
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import axios from "axios";
// components
import { GoBack } from "../components";
import { Link } from "react-router-dom";

const StyledMural = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 50vh;
`;

const StyledDisplayImg = styled.img`
    width: 90%;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
`;

const StyledSelectContainer = styled.div`
    display: flex;
    align-items: baseline;
    align-self: flex-start;
    margin: 0 0 0.5rem 5%;
`;

const StyledSelectImg = styled.img`
    height: 50px;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    cursor: pointer;
`;

const StyledTitle = styled.h1`
    font-family: "Barlow Condensed", sans-serif;
    font-weight: 700;
    font-size: 1.8rem;
    margin-bottom: 0.75rem;
    text-align: center;
`;

const StyledDescription = styled.p`
    font-family: "News Cycle", sans-serif;
    font-size: 1.2rem;
    text-align: center;
    margin: 0.75rem 5% 1rem 5%;
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
`;

const Mural = () => {
    const { muralId } = useParams();
    const [display, setDisplay] = useState(1);
    const [mural, setMural] = useState({});

    useEffect(() => {
        const source = axios.CancelToken.source();
        async function getMural() {
            const res = await axios.get(
                process.env.REACT_APP_BACKEND_URL + `murals/mural/${muralId}`,
                { cancelToken: source.token }
            );
            setMural(res.data.mural);
        }
        getMural();

        return function cleanup() {
            source.cancel();
        };
    }, []);

    const handleClick = (e) => {
        setDisplay(e.target.id);
    };

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
