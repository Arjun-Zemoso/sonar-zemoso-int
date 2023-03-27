import { Stack, Table, TableCell, TableHead, TableRow } from "@mui/material";
import React, { useState } from "react";
import { candidateData } from "../../../data/CandidateData";
import Input from "../../atoms/Input";
import Typography from "../../atoms/Typography";
import CandidatesTableRow from "../../molecules/CandidatesTableRow";
import FilterListRoundedIcon from "@mui/icons-material/FilterListRounded";
import Button from "../../atoms/Button";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
const CandidatesTable = () => {
  const data = candidateData;
  const [tableData, setTableData] = useState(data);
  const handleSearch = (e: any) => {
    const query = (e.target.value).toLowerCase().trim();
    if (query.length > 2) {
      const newTableData= data.filter(item=>{
        return (item.name.toLowerCase()).includes(query)
      })
      setTableData(newTableData);
    }
    else{
        setTableData(data);
    }
  };
  return (
    <>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="subtitle-1">Candidates Information</Typography>
        <Stack direction="row" gap={1}>
          <Input
            type="text"
            placeholder="Search for candidates ..."
            onChange={(e: any) => {
              handleSearch(e);
            }}
          ></Input>
          <Button variant="secondary" endIcon={faFilter}>
            Filter
          </Button>
        </Stack>
      </Stack>
      <Table stickyHeader >
        <TableHead>
          <TableRow  sx={{backgroundColor :'#F7F8FA'}}>
            <TableCell>
              <Typography variant="caption-1">Name</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="caption-1">Adjudication</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="caption-1">Status</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="caption-1">Location</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="caption-1">Date</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        {tableData.map((item) => {
          return (
            <CandidatesTableRow
              key={item.name}
              name={item.name}
              adjudication={item.adjudication}
              status={item.status}
              location={item.location}
              date={item.date}
            ></CandidatesTableRow>
          );
        })}
      </Table>
    </>
  );
};
export default CandidatesTable;
