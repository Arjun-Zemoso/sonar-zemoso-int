import React, { ReactNode } from "react";
import { StyledRectangle2 } from "./index.styles";
interface Rectangle2Props{
    icon:ReactNode;
}
const Rectangle2 = (props:Rectangle2Props)=>{
    const {icon} = props
    return(
        <StyledRectangle2>
            {icon}
        </StyledRectangle2>
    );
}
export default Rectangle2;