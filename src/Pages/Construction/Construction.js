// dependencies
import React from "react";
import styled from "styled-components";
// images
import Image from "../../images/paint-bucket.png";

const ConstructionDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1rem;
`;

const ConstructionHeader = styled.h1`
    font-weight: 700;
    text-align: center;
    font-size: 1.8rem;
    padding: 2rem 0;
`;

const ConstructionImg = styled.img`
    width: 200px;
    margin-bottom: 2rem;
`;

const ConstructionP = styled.p`
    text-align: center;
    line-height: 1.5;
`;

const ConstructionA = styled.a`
    font-weight: 700;
    text-decoration: underline;
    color: rgb(0, 0, 0);

    &:hover {
        color: rgb(144, 85, 162);
    }
`;

const CopyrightP = styled.p`
    margin-top: 2rem;
    font-size: 0.8rem;
`;

function Construction() {
    return (
        <ConstructionDiv>
            <ConstructionHeader>Masterpiece In Progress...</ConstructionHeader>
            <ConstructionImg src={Image} alt="Paintbrush and paint can" />
            <ConstructionP>
                In the meantime, find me on {/* */}
                <ConstructionA href="https://www.instagram.com/paintingjoymuralco/">
                    Instagram,
                </ConstructionA>
            </ConstructionP>
            <ConstructionP>
                Or shoot me an email at: {/* */}
                <ConstructionA href="mailto:paintingjoymuralco@gmail.com">
                    paintingjoymuralco@gmail.com
                </ConstructionA>
            </ConstructionP>
            <CopyrightP>&#169; 2021 - Painting Joy Mural Co.</CopyrightP>
        </ConstructionDiv>
    );
}

export default Construction;
