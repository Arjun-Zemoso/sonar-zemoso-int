import styled from "styled-components";
interface StyledTypographyProps {
  variant: string;
  color:string;
}
export const StyledTypography = styled.p<StyledTypographyProps>`
  font-family: Inter;
  color: ${({color})=> {return color}};
  font-size: ${({ variant }) => {
    switch (variant) {
      case "heading":
        return "24px";
      case "subtitle-1":
        return "16px";
      case "body-2":
        return "14px";
      case "caption-1":
        return "12px";
      case "caption-2":
        return "12px";
      case "caption-3":
        return "12px";
      case "body-1":
      default:
        return "14px";
    }
  }};
  font-style: normal;
  font-weight: ${({ variant }) => {
    switch (variant) {
      case "heading":
        return "normal";
      case "subtitle-1":
        return "500";
      case "body-2":
      case "caption-2":
        return "400";
      case "caption-1":
      case "caption-3":
      case "body-1":
      default:
        return "500";
    }
  }};
  line-height: ${({ variant }) => {
    switch (variant) {
      case "heading":
        return "30px";
      case "subtitle-1":
      case "body-2":
      case "caption-2":
        return "24px";
      case "caption-1":
      case "caption-3":
      case "body-1":
      default:
        return "20px";
    }
  }};
  text-transform: ${({ variant }) => {
    switch (variant) {
      case "caption-1":
        return "uppercase";
      case "caption-3":
        return "capitalize";
      default:
        return "none";
    }
  }};
`;
