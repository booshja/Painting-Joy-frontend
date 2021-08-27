// dependencies
import { useState, useEffect } from "react";

// set up time to live for cart in localStorage
// 259200000ms = 3 days
const ttl = 259200000;

const useLocalStorage = () => {
    // set up state
    const [state, setState] = useState(() => {
        // get initial state from localStorage if present
        let value;
        const now = new Date();
        try {
            const res = JSON.parse(window.localStorage.getItem("cart"));
            if (res === null) throw "No cart";
            if (now.getTime() > res.expiry) throw "Expired cart";
            value = res.value;
        } catch (err) {
            console.log("localStorage Error:", err);
            value = [];
        }
        return value;
    });

    useEffect(() => {
        // when state changes, set localStorage
        const now = new Date();
        const cart = {
            value: state,
            expiry: now.getTime() + ttl,
        };
        const insert = JSON.stringify(cart);
        window.localStorage.setItem("cart", insert);
    }, [state]);

    return [state, setState];
};

export default useLocalStorage;
