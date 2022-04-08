import styled from "styled-components";

const Form = styled.form`
    height: 60px;
    background-color: #fff;
    display: flex;
    align-items: center;
`;
const Button = styled.button``;

const Input = styled.input`
    width: 100%;
`;

function SearchBar() {
    return (
        <Form action="submit">
            <Button>Search</Button>
            <Input type="input" placeholder="Search games" />
        </Form>
    );
}

export default SearchBar;
