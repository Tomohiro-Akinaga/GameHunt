import styled from "styled-components";
import { Zap } from "@styled-icons/octicons";
import { background, text, textHover, button } from "../../styleVariables";
import { useState } from "react";

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
    background-color: ${background.searchBar};
    background-color: ${(props) =>
        props.isActive ? "white" : background.searchBar};
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

const iconStyle = {
    color: button.searchBar,
    height: "100%",
    width: "100%",
    hover: "black",
};

const Input = styled.input`
    height: 45px;
    width: 100%;
    border: none;
    color: ${text.inputText};
    background-color: transparent;
    padding-right: 20px;
    &:focus {
        outline: none;
    }
    &::placeholder {
        color: ${text.inputPlaceholder};
        font-weight: 300;
    }
    &:hover {
        &::placeholder {
            color: ${textHover.inputPlaceholder};
        }
    }
`;

const RedZap = styled(Zap)`
    color: red;
`;

function SearchBar() {
    const [isActive, setIsActive] = useState(false);

    return (
        <Form
            action="submit"
            onSubmit={(e) => e.preventDefault()}
            isActive={isActive}
        >
            <Button>
                <RedZap />
            </Button>
            <Input
                type="input"
                placeholder="Search games"
                onFocus={() => setIsActive(true)}
                onBlur={() => setIsActive(false)}
            />
        </Form>
    );
}

export default SearchBar;
