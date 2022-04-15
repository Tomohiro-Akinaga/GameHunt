import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled.a`
    color: white;
    text-decoration: none;
    &:hover {
        cursor: pointer;
    }
`;

function API() {
    return <StyledLink href="https://rawg.io/apidocs">API</StyledLink>;
}

export default API;
