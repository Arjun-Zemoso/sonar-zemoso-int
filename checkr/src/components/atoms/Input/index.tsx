import React from "react";
import { StyledInput } from "./index.styles";
const Input =(props:any)=>{
    const {type,placeholder='',children,...rest}=props;
    return(
        <StyledInput sx={{border: '1px solid #E5E7ED'}} type={`${type}`}  placeholder={`${placeholder}`} {...rest}/>
    );
}
export default Input;