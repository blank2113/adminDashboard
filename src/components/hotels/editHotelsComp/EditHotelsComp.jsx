import React from 'react'
import { useParams } from 'react-router-dom';
import { useGetOneHotelsQuery } from '../../../store/middleWares/hotelsApi';

const EditHotelsComp = () => {
    const { id } = useParams();
    const {data=[]}= useGetOneHotelsQuery(id)
    console.log(data);
  return (
    <div>EditHotelsComp</div>
  )
}

export default EditHotelsComp