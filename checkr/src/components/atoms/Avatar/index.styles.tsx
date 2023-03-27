import styled from "styled-components";
interface StyledDivProps {
    imageUrl: string;
  }
  
export const StyledAvatar = styled.div<StyledDivProps>`
    position: absolute;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 0%;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`