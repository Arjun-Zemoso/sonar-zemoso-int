import React from "react";
import { TableCell, TableRow } from "@mui/material";
import { StyledTypography } from "../../atoms/Typography/index.styles";
import Chip from "../../atoms/Chip";
import Typography from "../../atoms/Typography";
interface TableRowProps{
    name:string;
    adjudication:string;
    status:string;
    location:string;
    date:string;
}
const CandidatesTableRow= (props:TableRowProps)=>{
    const{name,adjudication,status,location,date}=props;
    return(
        <TableRow >
            <TableCell><Typography variant="body-2" color="#224DFF">{name}</Typography></TableCell>
            <TableCell><Typography variant="body-2">{adjudication}</Typography></TableCell>
            <TableCell><Chip type={status}></Chip></TableCell>
            <TableCell><Typography variant="body-2">{location}</Typography></TableCell>
            <TableCell><Typography variant="body-2">{date}</Typography></TableCell>
        </TableRow>
    );

}
export default CandidatesTableRow;