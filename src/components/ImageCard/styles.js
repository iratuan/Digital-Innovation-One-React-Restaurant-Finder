import styled from "styled-components";

export const Card = styled.div`
    width: 70px;
    height: 70px;
    border-radius: 5px;
    background-image: url(${(props) => props.photo});
    background-size:cover;
    display:flex;
    flex-direction: row;
    align-items:center;
    justify-content:center;
    padding:5px;
`;

export const Title = styled.p`
    font-family: ${props => props.theme.fonts.fontFamily};
    color: #fff;
    font-size: 14px;
`;