import styled from "styled-components";
import { Plus } from "@styled-icons/fa-solid/Plus";
import { useState } from "react";
import AddGameItem from "./AddGameItem/AddGameItem";

const Container = styled.div`
    width: 25px;
    height: 25px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    margin: 0 10px;
    position: relative;
`;

const AddIcon = styled(Plus)`
    width: 25px;
    height: 25px;
    color: white;
`;

const ItemBox = styled.ul`
    position: absolute;
    top: -10px;
    right: 0px;
    height: 130px;
    width: 250px;
    background-color: white;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

function AddGame() {
    const [isActive, setIsActive] = useState(false);

    return (
        <Container
            onMouseEnter={() => setIsActive(true)}
            onMouseLeave={() => setIsActive(false)}
        >
            {!isActive && <AddIcon></AddIcon>}
            {isActive && (
                <ItemBox>
                    <AddGameItem />
                </ItemBox>
            )}
        </Container>
    );
}

export default AddGame;
