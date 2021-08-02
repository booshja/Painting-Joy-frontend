// dependencies
import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const BACKEND_URL = process.env.BACKEND_URL;

const Center = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Homepage = ({ children }) => {
    // set up states
    const [isLoading, setIsLoading] = useState(true);
    const [newestMural, setNewestMural] = useState({});
    const [newestItem, setNewestItem] = useState([]);
    return <Center>{children}</Center>;
};

export default Homepage;
