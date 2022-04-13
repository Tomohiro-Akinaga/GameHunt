import styled from "styled-components";

const Container = styled.div`
    width: 37px;
    height: 37px;
    background: linear-gradient(#e66465, #9198e5);
    margin: 0 10px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
        cursor: pointer;
    }
`;

const Initial = styled.span`
    color: white;
    font-weight: 600;
    font-size: 1.2rem;
`;

function Avatar() {
    return (
        <Container>
            <Initial>TA</Initial>
        </Container>
    );
}

export default Avatar;
