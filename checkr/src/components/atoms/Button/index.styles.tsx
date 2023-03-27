import styled from "styled-components";
const fonts = `
  @import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");
`;
interface StyledButtonProps {
  variant: string;
}
export const StyledButton = styled.button<StyledButtonProps>`
  ${fonts}
  display: flex;
  font-family: Inter;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  gap: 4px;
  cursor: pointer;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  border-radius: 6px;
  border: ${({ variant }) =>
    variant === "secondary" ? "1px solid #E5E7ED" : "0px"
    };
  background: ${({ variant }) => {
    switch (variant) {
      case "primary":
        return "#224DFF";
      case "secondary":
        return "#FFFFFF";
      case "primary-disabled":
        return "#95AAFF";
    }
  }};
  color: ${({ variant }) => {
    switch (variant) {
      case "primary":
        return "#FFFFFF";
      case "secondary":
        return "#696A6E";
      case "primary-disabled":
        return "#FFFFFF";
    }
  }};
`;
