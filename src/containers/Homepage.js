// dependencies
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
// components
import { AboutMe, LoadingSpinner, NewDisplay } from "../components";
// breakpoints
import { breakpoints } from "../breakpoints";

const StyledHomepage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
    min-height: 42vh;

    ${breakpoints("margin-top", "", [{ 1024: 0 }])}
`;

const StyledNewDisplayContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    ${breakpoints("flex-direction", "", [{ 768: "row" }])}
    ${breakpoints("width", "%", [{ 768: 85 }])}
`;

const Homepage = () => {
    // set up states
    const [isLoading, setIsLoading] = useState(true);
    const [homepage, setHomepage] = useState({});

    useEffect(() => {
        const source = axios.CancelToken.source();

        async function getData() {
            const res = await axios.get(
                process.env.REACT_APP_BACKEND_URL + "homepage/",
                { cancelToken: source.token }
            );
            setHomepage(res.data.homepage);
            setIsLoading(false);
        }
        getData();

        return function cleanup() {
            source.cancel();
        };
    }, []);

    if (isLoading) {
        return (
            <StyledHomepage>
                <LoadingSpinner />
            </StyledHomepage>
        );
    }

    return (
        <StyledHomepage>
            <StyledNewDisplayContainer>
                <NewDisplay
                    variant="mural"
                    title={homepage.mural_title}
                    image={
                        process.env.REACT_APP_BACKEND_URL +
                        `murals/mural/${homepage.mural_id}/image/1`
                    }
                    id={homepage.mural_id}
                />
                <NewDisplay
                    variant="store"
                    title={homepage.item_title}
                    image={
                        process.env.REACT_APP_BACKEND_URL +
                        `items/item/${homepage.item_id}/image`
                    }
                    id={homepage.item_id}
                />
            </StyledNewDisplayContainer>
            <AboutMe
                greeting={homepage.greeting}
                message={homepage.message}
                image={process.env.REACT_APP_BACKEND_URL + `homepage/image`}
            />
        </StyledHomepage>
    );
};

export default Homepage;
