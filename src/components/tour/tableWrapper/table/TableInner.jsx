import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const TableInner = ({ data, firstNewsIndex, lastNewsIndex }) => {
  return (
    <TableContainer
      component={Paper}
      sx={{
        minWidth: 650,
        height: "650px",
        padding: "20px",
        boxShadow: "0px -2px 8px 2px rgba(34, 60, 80, 0.2)",
        borderRadius: "15px"
      }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table" size="medium">
        <TableHead>
          <TableRow>
            <TableCell
              sx={{ fontWeight: "700", fontSize: "18px" }}
              align="left"
            >
              Тур
            </TableCell>
            <TableCell
              sx={{ fontWeight: "700", fontSize: "18px" }}
              align="left"
            >
              Тип тура
            </TableCell>
            <TableCell
              sx={{ fontWeight: "700", fontSize: "18px" }}
              align="left"
            >
              Управление
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.slice(firstNewsIndex, lastNewsIndex).map((row) => (
            <TableRow
              key={row.title}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="left">{row.types}</TableCell>
              <TableCell align="left">asd</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableInner;
