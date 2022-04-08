import styled from "styled-components";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

const Container = styled.header`
    padding: 20px;
    height: 60px;
    display: flex;
    width: 100%;
`;

function Header() {
    return (
        <Container>
            <Logo />
            <SearchBar />
        </Container>
    );
}

export default Header;
