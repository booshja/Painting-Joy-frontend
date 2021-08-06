// dependencies
import React, { useContext } from "react";
import styled from "styled-components";
// components
import { PageTitle, StoreItem } from "../components";
// context
import ItemsContext from "../context/ItemsContext";

const StyledStore = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 45vh;
`;

const StyledItemsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 95%;
`;

const StyledP = styled.p`
    font-family: "News Cycle";
    font-size: 1.4rem;
`;

const Store = () => {
    const { items } = useContext(ItemsContext);
    return (
        <StyledStore>
            <PageTitle>Store</PageTitle>
            {items ? (
                <StyledItemsContainer>
                    {items.map((item) => (
                        <StoreItem item={item} key={item.id} />
                    ))}
                </StyledItemsContainer>
            ) : (
                <StyledP>Nothing Currently For Sale!</StyledP>
            )}
        </StyledStore>
    );
};

export default Store;
