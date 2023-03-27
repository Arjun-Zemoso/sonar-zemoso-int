import React, { ReactNode } from "react";
import { StyledIcon } from "./index.styles";
interface IconProps{
    children:ReactNode;
}
const Icon = (props:IconProps)=>{
    return(
        <StyledIcon>{props.children}</StyledIcon>
    );
}
export default Icon;