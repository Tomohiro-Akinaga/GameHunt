import styled from "styled-components";
import Avatar from "./Avatar";

const Container = styled.div`
    width: 250px;
    height: 60px;
    display: flex;
    align-items: center;
`;

function Item() {
    return (
        <Container>
            <Avatar />
        </Container>
    );
}

export default Item;
