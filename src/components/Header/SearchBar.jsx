import styled from "styled-components";
import { Search } from "@styled-icons/boxicons-regular/Search";
import { background, text, textHover, button } from "../../styleVariables";
import { useContext, useState } from "react";
import { SearchContext } from "../../SearchContext";

const Form = styled.form`
    height: 45px;
    display: flex;
    align-items: center;
    width: 100%;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    transition: all 0.2s;
    background-color: ${(props) =>
        props.formIsActive ? "white" : background.searchBar};

    &:hover {
        background-color: #fff;
    }
`;

const Button = styled.button`
    padding: 10px 10px 10px 15px;
    height: 45px;
    width: 45px;
    border: none;
    background-color: transparent;
    &:hover {
        cursor: pointer;
    }
`;

const Input = styled.input`
    height: 45px;
    width: 100%;
    border: none;
    color: ${(props) => (props.formIsActive ? "black" : text.inputText)};
    background-color: transparent;
    padding-right: 20px;
    &:focus {
        outline: none;
    }
    &::placeholder {
        color: ${(props) =>
            props.formIsActive
                ? textHover.inputPlaceholderHover
                : text.inputPlaceholder};
        font-weight: 300;
    }
`;

const SearchIcon = styled(Search)`
    color: ${(props) => (props.formIsActive ? "black" : button.searchBar)};
`;

function SearchBar() {
    const [formIsActive, setFormIsActive] = useState(false);
    const [inputIsActive, setInputIsActive] = useState(false);
    const [inputText, setInputText] = useState("");
    const { setSearchKeyword } = useContext(SearchContext);

    return (
        <Form
            action="submit"
            onMouseEnter={() => setFormIsActive(true)}
            onMouseLeave={() => !inputIsActive && setFormIsActive(false)}
            formIsActive={formIsActive}
            onSubmit={(e) => {
                e.preventDefault();
                setSearchKeyword(inputText);
            }}
        >
            <Button>
                <SearchIcon formIsActive={formIsActive} />
            </Button>
            <Input
                type="input"
                value={inputText}
                placeholder="Search games"
                formIsActive={formIsActive}
                onChange={(e) => setInputText(e.target.value)}
                onFocus={() => setInputIsActive(true)}
                onBlur={() => {
                    setInputIsActive(false);
                    setFormIsActive(false);
                }}
            />
        </Form>
    );
}

export default SearchBar;
