// dependencies
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
// components
import { LoadingSpinner, PageTitle, StoreItem } from "../components";
// context
import ItemsContext from "../context/ItemsContext";
// breakpoints
import { breakpoints } from "../breakpoints";

const StyledStore = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 45vh;

    ${breakpoints("min-height", "vh", [{ 414: 49 }, { 768: 52 }])}
`;

const StyledItemsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 95%;

    ${breakpoints("justify-content", "", [{ 768: "center" }])}
`;

const StyledP = styled.p`
    font-family: "News Cycle";
    font-size: 1.4rem;
`;

/** TEMPORARY 'COMING SOON' BANNER */
const StyledBanner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    p {
        font-family: "News Cycle", sans-serif;
        font-size: 2rem;
    }
`;
/** END TEMPORARY 'COMING SOON' BANNER */

const Store = () => {
    // set up state
    // const [loading, setLoading] = useState(true);

    // set up context
    const { items, setItems } = useContext(ItemsContext);

    // useEffect(() => {
    //     // get cancel token for axios
    //     const source = axios.CancelToken.source();

    //     const getItems = async () => {
    //         // on mount, get items data from store
    //         const itemRes = await axios.get(
    //             process.env.REACT_APP_BACKEND_URL + "items/",
    //             { cancelToken: source.token }
    //         );
    //         setItems(itemRes.data.items);
    //         setLoading(false);
    //     };
    //     getItems();

    //     return function cleanup() {
    //         // on unmount cancel any open axios requests
    //         source.cancel();
    //     };
    // }, []);

    // if (loading)
    //     return (
    //         // if loading, return loading spinner
    //         <StyledStore>
    //             <LoadingSpinner />
    //         </StyledStore>
    //     );

    return (
        <StyledStore>
            <PageTitle>Store</PageTitle>
            {/* {items ? (
                <StyledItemsContainer>
                    {items.map((item) => (
                        <StoreItem item={item} key={item.id} />
                    ))}
                </StyledItemsContainer>
            ) : (
                <StyledP>Nothing Currently For Sale!</StyledP>
            )} */}
            <StyledBanner>
                <p>Store coming soon!</p>
            </StyledBanner>
        </StyledStore>
    );
};

export default Store;
