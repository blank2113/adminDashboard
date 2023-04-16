import React, { useState } from 'react'
import { Pagination } from "@mui/material";
import { useGetAllTourTypesQuery } from '../../../store/middleWares/mainApi';
import TableTypes from './tableType/TableTypes';

const TypeTableComp = () => {
  const { data=[] } = useGetAllTourTypesQuery();
  const [currentPage, setCurrentPage] = useState(1);
  const [newsPerPage] = useState(8);
  const lastNewsIndex = currentPage * newsPerPage;
  const firstNewsIndex = lastNewsIndex - newsPerPage;
  const handleChange = (event, value) => {
    setCurrentPage(value);
  };


  return (
    <div>
    <TableTypes
      data={data}
      firstNewsIndex={firstNewsIndex}
      lastNewsIndex={lastNewsIndex}
    />
      <Pagination
        count={Math.ceil(data.length / newsPerPage)}
        size="large"
        color="primary"
        sx={{
          my: "20px",
          backgroundColor: "#fff",
          borderRadius: "15px",
          width: "30%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0px -2px 8px 2px rgba(34, 60, 80, 0.2)",
        }}
        onChange={handleChange}
      />
  </div>
  )
}

export default TypeTableComp