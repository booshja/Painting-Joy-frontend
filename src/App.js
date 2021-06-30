// dependencies
import React from "react";
import styled from "styled-components";
// pages
import Construction from "./Pages/Construction/Construction";
// global styles
import GlobalStyle from "./globalStyles";

const StyledApp = styled.div`
    min-height: 100vh;
    background-color: rgb(230, 211, 169);
    font-family: Century Gothic, CenturyGothic, AppleGothic, sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

function App() {
    return (
        <StyledApp className="App">
            <GlobalStyle />
            <Construction />
        </StyledApp>
    );
}

export default App;
