// dependencies
import React from "react";
// context
import AdminContext from "./context/AdminContext";
// router
import Router from "./Router";
// global styles
import GlobalStyle from "./globalStyles";

function App() {
    return (
        <AdminContext.Provider>
            <GlobalStyle />
            <Router />
        </AdminContext.Provider>
    );
}

export default App;
