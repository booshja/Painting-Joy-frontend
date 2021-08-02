// dependencies
import React, { useState } from "react";
// context
// import AdminContext from "./context/AdminContext";
import MenuContext from "./context/MenuContext";
// router
import Router from "./Router";
// global styles
import GlobalStyle from "./globalStyles";

function App() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <MenuContext.Provider value={{ menuOpen, setMenuOpen }}>
            <GlobalStyle />
            <Router />
        </MenuContext.Provider>
    );
}

export default App;
