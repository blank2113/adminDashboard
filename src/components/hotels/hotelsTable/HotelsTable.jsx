import { Pagination } from '@mui/material';
import React, { useState } from 'react'
import { useGetAllHotelsQuery } from '../../../store/middleWares/hotelsApi';
import HotelTableComp from './hotelTableComp/HotelTableComp';

const HotelsTable = () => {
    const { data=[] } = useGetAllHotelsQuery();
    const [currentPage, setCurrentPage] = useState(1);
    const [newsPerPage] = useState(8);
    const lastNewsIndex = currentPage * newsPerPage;
    const firstNewsIndex = lastNewsIndex - newsPerPage;
    const handleChange = (event, value) => {
      setCurrentPage(value);
    };
  return (
    <div>
          <HotelTableComp
      data={data}
      firstNewsIndex={firstNewsIndex}
      lastNewsIndex={lastNewsIndex}
    />
      <Pagination
        count={Math.ceil((data.length - 5) / newsPerPage)}
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

export default HotelsTable