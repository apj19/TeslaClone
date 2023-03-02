import React from 'react';
import { useParams } from 'react-router-dom';

function CarDetails() {
    const {id}=useParams()
  return (
    <div className='mt-[50px]'>This is {id}</div>
  )
}

export default CarDetails