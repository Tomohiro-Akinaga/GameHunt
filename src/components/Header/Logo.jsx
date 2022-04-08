import styled from "styled-components";
import { Link } from "react-router-dom";

const Title = styled.h1`
    font-size: 1.4em;
    font-weight: 700;
    text-align: center;
    width: 120px;
    height: 60px;
    line-height: 100%;
    letter-spacing: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-transform: uppercase;
`;

const linkStyle = {
    textDecoration: "none",
};

function Logo() {
    return (
        <Link to="/" style={linkStyle}>
            <Title>
                Game
                <br />
                Hunt
            </Title>
        </Link>
    );
}

export default Logo;
