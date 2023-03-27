import React from "react";
import { StyledImage } from "./index.styles";
interface Props{
    imageUrl:string;
}
const Image = (props:Props)=>{
    const {imageUrl} = props;
    return(
        <StyledImage imageUrl={imageUrl}></StyledImage>
    );
}
export default Image;