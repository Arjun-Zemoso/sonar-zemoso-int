import React from "react";
// import './Avatar.css'
import { StyledAvatar } from "./index.styles";
interface AvatarProps {
    imageUrl:string;
}
const Avatar = (props:AvatarProps) =>{
    const {imageUrl}=props;
    return(
        <StyledAvatar imageUrl={imageUrl}></StyledAvatar>
        // <Avatar {...rest} imagestyle={{backgroundImage:`url(${imageUrl})` }}></div>
    );
}
export default Avatar;