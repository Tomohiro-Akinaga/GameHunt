import styled from "styled-components";
import Avatar from "./HeaderItem/Avatar";
import MyLibrary from "./HeaderItem/MyLibrary";
import Notification from "./HeaderItem/Notification";
import AddGame from "./HeaderItem/AddGame";
import API from "./HeaderItem/API";
import Setting from "./HeaderItem/Setting";

const Container = styled.div`
    width: 300px;
    height: 60px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 0 20px;
`;

function Item() {
    return (
        <Container>
            <Avatar />
            <MyLibrary />
            <Notification />
            <AddGame />
            <API />
            <Setting />
        </Container>
    );
}

export default Item;
