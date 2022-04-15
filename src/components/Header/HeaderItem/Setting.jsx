import styled from "styled-components";
import { ThreeDots } from "@styled-icons/bootstrap/ThreeDots";
import SettingItem from "./SettingItem/SettingItem";
import { useState } from "react";

const Container = styled.div`
    height: 25px;
    width: 25px;
    margin: 0 10px;
    position: relative;
    &:hover {
        cursor: pointer;
    }
`;

const ThreeDotsIcon = styled(ThreeDots)`
    color: white;
`;

const SettingBox = styled.ul`
    width: 180px;
    height: 250px;
    background-color: white;
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 4px;
`;

const LogOut = styled.p`
    color: white;
    background-color: black;
    height: 35px;
    line-height: 35px;
    font-size: 0.7rem;
    font-weight: 300;
    text-align: center;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
`;

function Setting() {
    const [isActive, setIsActive] = useState(false);
    return (
        <Container
            onMouseEnter={() => setIsActive(true)}
            onMouseLeave={() => setIsActive(false)}
        >
            {!isActive && <ThreeDotsIcon></ThreeDotsIcon>}
            {isActive && (
                <SettingBox>
                    <SettingItem />
                    <LogOut>Log Out</LogOut>
                </SettingBox>
            )}
        </Container>
    );
}

export default Setting;
