import Slider from "react-slick";
import styled from "styled-components";

export const Wrapper = styled.div`
    display:flex;
    flex-direction: row;
`;

export const Container = styled.aside`
    background: ${(props) => props.theme.colors.background};   
    width:  360px;
    height: 100vh;
    overflow-y: auto;
`;

export const Search = styled.section`
    display:flex;
    flex-direction: column;
    justify-content:center;
    background: #fff;
    padding:5px;

`;

export const Logo = styled.img`
    margin:20px auto;
    max-width: 200px;
`;

export const Map = styled.div`
    background: red;
    width: 500px;
`;

export const CarouselTitle = styled.h1`
font-family: ${(props) => props.theme.fonts.fontFamily};
color: ${(props) => props.theme.colors.text};
font-size: 24px;
font-weight: bold; 
line-height: 29px;
margin:0px 5px;
`;

export const Carousel = styled(Slider)`
    margin:5px;
`;

export const ContainerCarousel = styled.div`
    background: #fff;
    padding-top:10px
`;

export const ModalTitle = styled.h1`
    font-family: ${(props) => props.theme.fonts.fontFamily};
    color: ${(props) => props.theme.colors.text};
    font-size: 24px;
    font-weight: bold; 
    line-height: 29px;
    margin:0px 5px;
`;

export const ModalContent = styled.p`
    font-family: ${(props) => props.theme.fonts.fontFamily};
    color: ${(props) => props.theme.colors.text};
    font-size: 16px;
    font-weight: normal; 
    line-height: 21px;
    margin:20px 5px;
`;
