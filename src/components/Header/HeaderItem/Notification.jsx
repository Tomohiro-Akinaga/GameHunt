import styled from "styled-components";
import { Bell } from "@styled-icons/boxicons-solid/Bell";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
    width: 25px;
    height: 25px;
    background-color: transparent;
    border: none;
    cursor: pointer;
`;

const BellIcon = styled(Bell)`
    color: white;
`;

function Notification() {
    return (
        <StyledLink to="/">
            <BellIcon></BellIcon>
        </StyledLink>
    );
}

export default Notification;
