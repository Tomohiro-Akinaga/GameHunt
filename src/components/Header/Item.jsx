import styled from "styled-components";
import Avatar from "./HeaderItem/Avatar";
import MyLibrary from "./HeaderItem/MyLibrary";
import Notification from "./HeaderItem/Notification";

const Container = styled.div`
    width: 250px;
    height: 60px;
    display: flex;
    align-items: center;
    margin: 0 20px;
`;

function Item() {
    return (
        <Container>
            <Avatar />
            <MyLibrary />
            <Notification />
        </Container>
    );
}

export default Item;
