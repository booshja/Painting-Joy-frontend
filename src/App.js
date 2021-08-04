// dependencies
import React, { useEffect, useState } from "react";
import axios from "axios";
// api
import Api from "./api";
// context
// import AdminContext from "./context/AdminContext";
import MenuContext from "./context/MenuContext";
import MuralsContext from "./context/MuralsContext";
// router
import Router from "./Router";
// global styles
import GlobalStyle from "./globalStyles";

function App() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [murals, setMurals] = useState([]);
    const [items, setItems] = useState([]);

    useEffect(() => {
        async function getData() {
            try {
                const muralRes = await axios(
                    process.env.REACT_APP_BACKEND_URL + "murals/active"
                );
                setMurals(muralRes.data.murals);
                // const itemRes = await axios.get(
                //     process.env.REACT_APP_BACKEND_URL + "/items/"
                // );
                // setItems(itemRes.data.items);
            } catch (err) {
                console.log(err);
            }
        }
        getData();
    }, []);

    return (
        <MenuContext.Provider value={{ menuOpen, setMenuOpen }}>
            <MuralsContext.Provider value={{ murals }}>
                <GlobalStyle />
                <Router />
            </MuralsContext.Provider>
        </MenuContext.Provider>
    );
}

export default App;
