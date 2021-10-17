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
    min-height: calc(100vh - 60px);
    width: 100%;

    ${breakpoints("margin-top", "", [{ 1024: 0 }])}
`;

const StyledNewDisplayContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    max-width: 650px;

    ${breakpoints("flex-direction", "", [{ 768: "row" }])}
    ${breakpoints("width", "%", [{ 768: 85 }])}
`;

const Homepage = () => {
    // set up states
    const [isLoading, setIsLoading] = useState(true);
    const [homepage, setHomepage] = useState({});

    useEffect(() => {
        // get cancel token for aborted axios call
        const source = axios.CancelToken.source();

        async function getData() {
            // get homepage data on component mount
            const res = await axios.get(
                process.env.REACT_APP_BACKEND_URL + "homepage/",
                { cancelToken: source.token }
            );
            setHomepage(res.data.homepage);
            setIsLoading(false);
        }
        getData();

        return function cleanup() {
            // cleanup function for aborted axios call
            source.cancel();
        };
    }, []);

    // if data loading, display loading spinner
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
