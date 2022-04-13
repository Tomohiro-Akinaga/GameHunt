import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
    position: relative;
    margin: 0 20px;
    width: 70px;
    text-align: center;
    color: white;
    font-weight: 300;
    font-size: 0.8rem;
    &:hover {
        cursor: pointer;
    }
`;

const ItemBox = styled.ul`
    position: absolute;
    top: -20px;
    height: 170px;
    width: 120px;
    background-color: white;
    border-radius: 4px;
`;

function MyLibrary() {
    const [isActive, setIsActive] = useState(false);
    return (
        <Container
            onMouseEnter={() => setIsActive(true)}
            onMouseLeave={() => setIsActive(false)}
        >
            <p>My Library</p>
            <ItemBox></ItemBox>
        </Container>
    );
}

export default MyLibrary;
