import React from "react";
import Typography from "../../atoms/Typography";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'; 
import { KeyAndValueDiv, StyledCard } from "./index.styles";
import Rectangle2 from "../Rectangle2";
const Card = () =>{
    return(
        <StyledCard>
            <Rectangle2 icon = {<PersonOutlineOutlinedIcon />}></Rectangle2>
            <KeyAndValueDiv>
                <Typography variant="body-2">Name</Typography>
                <Typography variant="body-1">John Smith</Typography>
            </KeyAndValueDiv>
        </StyledCard>
    );
}
export default Card;