import styled from "styled-components";
import { background } from "../../styleVariables";

const Form = styled.form`
    height: 45px;
    display: flex;
    align-items: center;
    width: 100%;
    background-color: ${background.searchBar};
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    transition: all 0.2s;
    &:hover {
        background-color: #fff;
    }
`;

const Button = styled.button`
    height: 45px;
    border: none;
    padding: 10px;
    background-color: transparent;
    &:hover {
        cursor: pointer;
    }
`;

const Input = styled.input`
    height: 45px;
    width: 100%;
    border: none;
    color: #000;
    background-color: transparent;
    padding-right: 20px;
    &:focus {
        outline: none;
    }
`;

function SearchBar() {
    return (
        <Form action="submit">
            <Button>
                {/* <FontAwesomeIcon magnifyingGlass={magnifyingGlass} /> */}
            </Button>
            <Input type="input" placeholder="Search games" />
        </Form>
    );
}

export default SearchBar;
