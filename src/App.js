// dependencies
import React, { useEffect, useState } from "react";
// context
// import MenuContext from "./context/MenuContext";
// import ItemsContext from "./context/ItemsContext";
// import CartContext from "./context/CartContext";
// // custom hooks
// import useLocalStorage from "./hooks/useLocalStorage";
// // router
// import Router from "./Router";
// // global styles
// import GlobalStyle from "./globalStyles";
import Construction from "./containers/Construction";

function App() {
    // // set up states
    // const [menuOpen, setMenuOpen] = useState(false);
    // const [items, setItems] = useState([]);
    // const [cart, setCart] = useState([]);
    // const [orderId, setOrderId] = useState(null);
    // s// et up hooks
    // const [localStorageCart, setLocalStorageCart] = useLocalStorage();

    // useEffect(() => {
    // // when localStorageCart changes, update cart and localStorage
    //     setCart(localStorageCart);
    // }, [localStorageCart]);

    // const removeFromCart = (id) => {
    // // find item in cart, remove it, update localStorage
    //     const idx = cart.findIndex((item) => item.id === id);
    //     const cartContents = [...cart];
    //     cartContents.splice(idx, 1);
    //     setLocalStorageCart(() => cartContents);
    // };

    return (
        // <MenuContext.Provider value={{ menuOpen, setMenuOpen }}>
        //     <ItemsContext.Provider value={{ items, setItems }}>
        //         <CartContext.Provider
        //             value={{
        //                 cart,
        //                 setLocalStorageCart,
        //                 removeFromCart,
        //                 orderId,
        //                 setOrderId,
        //             }}
        //         >
        //             <GlobalStyle />
        //             <Router />
        //         </CartContext.Provider>
        //     </ItemsContext.Provider>
        // </MenuContext.Provider>
        <Construction />
    );
}

export default App;
