import styled from 'styled-components'

export const ControlImgStyle = styled.img`
    width: 80px;
    border-radius: 10px;
    margin: 15px;
    &:hover {
        opacity: 75%;
    }
    border: ${props => props.active ? "2px solid  hsl(26, 100%, 55%)" : "none"};
    opacity: ${props => props.active ? "50%" : "100%"};

`;