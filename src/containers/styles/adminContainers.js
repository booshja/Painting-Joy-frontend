// dependencies
import styled from "styled-components";
// breakpoints
import { breakpoints } from "../../breakpoints";

export const StyledCell = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border: 1px solid #207070;
    width: 100%;
    padding: 1rem;
    background-color: #ffffff;

    ${breakpoints("flex-basis", "%", [{ 1024: 50 }])}
`;
