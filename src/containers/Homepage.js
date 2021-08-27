// dependencies
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
// components
import { AboutMe, NewDisplay } from "../components";

const StyledHomepage = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
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
            setIsLoading((loading) => !loading);
        }
        getData();

        return function cleanup() {
            source.cancel();
        };
    }, []);

    if (isLoading) {
        return <p>Loading &hellip;</p>;
    }

    return (
        <StyledHomepage>
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
            <AboutMe
                greeting={homepage.greeting}
                message={homepage.message}
                image={process.env.REACT_APP_BACKEND_URL + `homepage/image`}
            />
        </StyledHomepage>
    );
};

export default Homepage;
