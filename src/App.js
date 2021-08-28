// dependencies
import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
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
// components
import { LoadingSpinner } from "./components";
// global styles
import GlobalStyle from "./globalStyles";

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 90vh;
`;

function App() {
    // set up states
    const [menuOpen, setMenuOpen] = useState(false);
    const [murals, setMurals] = useState([]);
    const [items, setItems] = useState([]);
    const [cart, setCart] = useState([]);
    const [orderId, setOrderId] = useState(null);
    const [loading, setLoading] = useState(true);
    // set up custom hooks
    const [localStorageCart, setLocalStorageCart] = useLocalStorage();

    useEffect(() => {
        // when localStorageCart changes, update cart and localStorage
        setCart(localStorageCart);
    }, [localStorageCart]);

    useEffect(() => {
        const source = axios.CancelToken.source();
        // on mount get mural data
        async function getData() {
            try {
                const muralRes = await axios(
                    process.env.REACT_APP_BACKEND_URL + "murals/active"
                );
                setMurals(muralRes.data.murals);
                setLoading(false);
            } catch (err) {
                console.log(err);
            }
        }
        getData();

        return function cleanup() {
            source.cancel();
        };
    }, []);

    const removeFromCart = (id) => {
        const idx = cart.findIndex((item) => item.id === id);
        const cartContents = [...cart];
        cartContents.splice(idx, 1);
        setLocalStorageCart(() => cartContents);
    };

    if (loading)
        return (
            <StyledContainer>
                <LoadingSpinner />
            </StyledContainer>
        );

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
