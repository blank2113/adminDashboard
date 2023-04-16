import React from 'react'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDeleteTourTypesMutation } from "../../../../store/middleWares/mainApi";
import { useNavigate } from "react-router-dom";

const DestTableComp = ({ data, firstNewsIndex, lastNewsIndex }) => {
    const [deleteTourType]= useDeleteTourTypesMutation()
    const navigate = useNavigate()
  
  return (
    <TableContainer
    component={Paper}
    sx={{
      minWidth: 650,
      height: "650px",
      padding: "20px",
      boxShadow: "0px -2px 8px 2px rgba(34, 60, 80, 0.2)",
      borderRadius: "15px",
    }}
  >
    <Table sx={{ minWidth: 650 }} aria-label="simple table" size="medium">
      <TableHead>
        <TableRow>
          <TableCell
            sx={{ fontWeight: "700", fontSize: "18px" }}
            align="left"
          >
            Название города
          </TableCell>
          <TableCell
            sx={{ fontWeight: "700", fontSize: "18px" }}
            align="center"
          >
            Управление
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data
          ? data.slice(firstNewsIndex, lastNewsIndex).map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row?.name}
                </TableCell>
                <TableCell align="right">
                  <div className="icons">
                    <div className="icons__item" onClick={()=> navigate(`/main/tour_types/edit/${row.id}`)}>
                      <i
                        className="fa-solid fa-pen-to-square"
                      />
                    </div>
                    <div className="icons__item2" onClick={()=> deleteTourType(row.id)}>
                      <i className="fa-solid fa-trash" />
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            ))
          : null}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default DestTableComp