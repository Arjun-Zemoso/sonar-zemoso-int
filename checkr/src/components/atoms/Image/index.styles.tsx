import styled from "styled-components";
interface StyledImageProps {
    imageUrl : string;
}
export const StyledImage = styled.div<StyledImageProps>`
    position: absolute;
    width: 200px;
    height: 200px;
    background-image: ${({ imageUrl }) => `url(${imageUrl})`};
    background-position:center;
    background-size:contain;
`;