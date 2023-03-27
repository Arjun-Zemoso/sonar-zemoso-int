import styled from "styled-components";

const fonts = `
  @import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");
`;
interface StyledChipProps {
  type: string;
}
export const StyledChip = styled.div<StyledChipProps>`
  ${fonts}
  display: inline;
  font-family: Inter;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  font-style: normal;
  color: ${({ type }) => {
    switch (type) {
      case "scheduled":
        return "#3E5FE2";
      case "clear":
        return "#17A076";
      case "consider":
        return "#A08817";
    }
  }};
  background-color: ${({ type }) => {
    switch (type) {
      case "scheduled":
        return "#F2F4FC";
      case "clear":
        return "#F2FCFB";
      case "consider":
        return "#FAF8EB";
    }
  }};
`;
