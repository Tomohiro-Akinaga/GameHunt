import styled from "styled-components";
import { Library } from "@styled-icons/fluentui-system-regular/Library";
import { PlusSquare } from "@styled-icons/bootstrap/PlusSquare";
import { Folder } from "@styled-icons/bootstrap/Folder";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
    color: black;
    font-weight: 300;
    font-size: 0.8rem;
    text-decoration: none;
    transition: all 0.1s;
    margin: 0 10px;
    padding: 0 10px;
    line-height: 40px;
    display: flex;
    align-items: center;
    &:hover {
        background-color: #c7c7c7;
        border-radius: 4px;
    }
`;

const addGameItem = [
    { icon: Library, text: "Add a game to your Library", link: "/" },
    { icon: PlusSquare, text: "Add a missing game", link: "/" },
    { icon: Folder, text: "Start a new collection", link: "/" },
];

const iconStyle = {
    width: "20px",
    height: "20px",
    marginRight: "10px",
};

function AddGameItem() {
    return (
        <>
            {addGameItem.map((item, index) => (
                <StyledLink to={item.link} key={index}>
                    <item.icon style={iconStyle} />
                    {item.text}
                </StyledLink>
            ))}
        </>
    );
}

export default AddGameItem;
