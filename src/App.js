// dependencies
import React from "react";
// context
import AdminContext from "./context/AdminContext";
// router
import Router from "./Router";

function App() {
    return (
        <AdminContext.Provider>
            <GlobalStyle />
            <Router />
        </AdminContext.Provider>
    );
}

export default App;
