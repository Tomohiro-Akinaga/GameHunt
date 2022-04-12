import styled from "styled-components";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Item from "./Item";

const Container = styled.header`
    padding: 20px;
    height: 60px;
    display: flex;
    align-items: center;
`;

function Header() {
    return (
        <Container>
            <Logo />
            <SearchBar />
            <Item />
        </Container>
    );
}

export default Header;
