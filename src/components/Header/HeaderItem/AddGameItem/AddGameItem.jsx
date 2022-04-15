import styled from "styled-components";
import { Library } from "@styled-icons/boxicons-regular/Library";
import { AddSquare } from "@styled-icons/fluentui-system-filled/AddSquare";
import { Folder } from "@styled-icons/entypo/Folder";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
    color: black;
    font-weight: 300;
    font-size: 0.8rem;
    text-decoration: none;
    transition: all 0.1s;
    margin: 0 15px;
    line-height: 40px;
    display: flex;
    align-items: center;
    &:hover {
        background-color: #c7c7c7;
        border-radius: 4px;
    }
`;

const ItemIcon = styled(Library)`
    color: black;
    width: 30px;
    height: 30px;
    margin-right: 10px;
`;

const addGameItem = [
    { icon: Library, text: "Add a game to your Library", link: "/" },
    { icon: AddSquare, text: "Add a missing game", link: "/" },
    { icon: Folder, text: "Start a new collection", link: "/" },
];

function AddGameItem() {
    return (
        <>
            {addGameItem.map((item, index) => (
                <StyledLink to={item.link} key={index}>
                    <ItemIcon></ItemIcon>
                    {item.text}
                </StyledLink>
            ))}
        </>
    );
}

export default AddGameItem;
