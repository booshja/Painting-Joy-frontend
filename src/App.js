// dependencies
import React, { useEffect, useState } from "react";
import axios from "axios";
// api
// ? import Api from "./api";
// context
// import AdminContext from "./context/AdminContext";
import MenuContext from "./context/MenuContext";
import MuralsContext from "./context/MuralsContext";
import ItemsContext from "./context/ItemsContext";
import CartContext from "./context/CartContext";
// custom hooks
import useLocalStorage from "./hooks/useLocalStorage";
// router
import Router from "./Router";
// global styles
import GlobalStyle from "./globalStyles";

function App() {
    // set up states
    const [menuOpen, setMenuOpen] = useState(false);
    const [murals, setMurals] = useState([]);
    const [items, setItems] = useState([]);
    const [cart, setCart] = useState([]);
    const [orderId, setOrderId] = useState(null);
    // set up custom hooks
    const [localStorageCart, setLocalStorageCart] = useLocalStorage();

    useEffect(() => {
        // when localStorageCart changes, update cart and localStorage
        setCart(localStorageCart);
    }, [localStorageCart]);

    useEffect(() => {
        // on mount get mural data
        async function getData() {
            try {
                const muralRes = await axios(
                    process.env.REACT_APP_BACKEND_URL + "murals/active"
                );
                setMurals(muralRes.data.murals);
            } catch (err) {
                console.log(err);
            }
        }
        getData();
    }, []);

    const removeFromCart = (id) => {
        const idx = cart.findIndex((item) => item.id === id);
        const cartContents = [...cart];
        cartContents.splice(idx, 1);
        setLocalStorageCart(() => cartContents);
    };

    return (
        <MenuContext.Provider value={{ menuOpen, setMenuOpen }}>
            <MuralsContext.Provider value={{ murals }}>
                <ItemsContext.Provider value={{ items, setItems }}>
                    <CartContext.Provider
                        value={{
                            cart,
                            setLocalStorageCart,
                            removeFromCart,
                            orderId,
                            setOrderId,
                        }}
                    >
                        <GlobalStyle />
                        <Router />
                    </CartContext.Provider>
                </ItemsContext.Provider>
            </MuralsContext.Provider>
        </MenuContext.Provider>
    );
}

export default App;
