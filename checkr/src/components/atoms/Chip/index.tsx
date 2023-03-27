import React from "react";
import './index.styles.tsx'
import { StyledChip } from "./index.styles";
interface ChipProps{
    type:string;
}
const Chip = (props:ChipProps)=>{
    const {type} = props;
    return(
        <StyledChip type={type}>{type}</StyledChip>
    );
}
export default Chip;