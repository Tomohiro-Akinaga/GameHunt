import styled from "styled-components";
import { background, textColor, textColorHover } from "../../styleVariables";
import searchButtonImg from "../../assets/images/search-button.png";
import searchButtonHoverImg from "../../assets/images/search-button-hover.png";
import { useState } from "react";

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
    padding: 14px;
    background-color: transparent;
    &:hover {
        cursor: pointer;
    }
`;

const ButtonImg = styled.img`
    height: 100%;
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
    &::placeholder {
        color: ${textColor.inputPlaceholder};
        font-weight: 300;
    }
    &:hover {
        &::placeholder {
            color: ${textColorHover.inputPlaceholder};
        }
    }
`;

function SearchBar() {
    const [isHover, setIsHover] = useState(false);
    return (
        <Form
            action="submit"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            <Button>
                <ButtonImg
                    src={isHover ? searchButtonHoverImg : searchButtonImg}
                />
            </Button>
            <Input type="input" placeholder="Search games" />
        </Form>
    );
}

export default SearchBar;
