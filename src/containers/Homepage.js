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
        async function getData() {
            const res = await axios.get(
                process.env.REACT_APP_BACKEND_URL + "homepage/"
            );
            setHomepage(res.data.homepage);
            setIsLoading((loading) => !loading);
        }
        getData();
    }, []);

    if (isLoading) {
        return <p>Loading &hellip;</p>;
    }

    return (
        <StyledHomepage>
            <NewDisplay
                variant="mural"
                title={homepage.mural_title}
                image={`http://localhost:5000/murals/mural/${homepage.mural_id}/image/1`}
                id={homepage.mural_id}
            />
            <NewDisplay
                variant="store"
                title={homepage.item_title}
                image={`http://localhost:5000/items/item/${homepage.item_id}/image`}
                id={homepage.item_id}
            />
            <AboutMe
                greeting={homepage.greeting}
                message={homepage.message}
                image={`http://localhost:5000/homepage/image`}
            />
        </StyledHomepage>
    );
};

export default Homepage;
