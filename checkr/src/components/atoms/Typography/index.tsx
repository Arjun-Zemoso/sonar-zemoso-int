import React, { ReactNode } from "react";
import { StyledTypography } from "./index.styles";

interface TypographyProps{
    variant : string;
    color ?:string
    children:ReactNode;
}
const Typography = (props :TypographyProps) =>{
    const {variant='heading',color='#2c2c2e',children} = props;
    return(
        <StyledTypography variant={variant} color={color}>
            {children}
        </StyledTypography>
    );
}
export default Typography;