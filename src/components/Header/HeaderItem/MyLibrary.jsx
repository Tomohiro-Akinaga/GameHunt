import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";

const Container = styled.div`
    position: relative;
    padding: 0 10px;
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
    left: -5px;
    height: 170px;
    width: 100px;
    background-color: white;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const StyledLink = styled(Link)`
    margin: 0 10px;
    color: black;
    line-height: 25px;
    text-decoration: none;
    transition: all 0.1s;
    &:hover {
        background-color: #c7c7c7;
        border-radius: 4px;
    }
`;

function MyLibrary() {
    const [isActive, setIsActive] = useState(false);

    const MyLibraryItem = [
        "My Library",
        "Overview",
        "My Games",
        "Wishlist",
        "Reviews",
        "Collections",
    ];

    return (
        <Container
            onMouseEnter={() => setIsActive(true)}
            onMouseLeave={() => setIsActive(false)}
        >
            {!isActive && <p>My Library</p>}
            {isActive && (
                <ItemBox>
                    {MyLibraryItem.map((item, index) => (
                        <StyledLink to="/" key={index}>
                            {item}
                        </StyledLink>
                    ))}
                </ItemBox>
            )}
        </Container>
    );
}

export default MyLibrary;
