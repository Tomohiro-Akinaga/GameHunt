import styled from "styled-components";

const Container = styled.div`
    width: 45px;
    height: 45px;
    background-color: red;
    margin: 0 10px;
    border-radius: 50%;
`;

const Initial = styled.span`
    color: white;
    width: 45px;
    line-height: 45px;
    text-align: center;
    display: inline-block;
`;

function Avatar() {
    return (
        <Container>
            <Initial>TA</Initial>
        </Container>
    );
}

export default Avatar;
