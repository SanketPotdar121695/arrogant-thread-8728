import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getProduct } from '../../redux/products/productAction'

export const ProductPage = () => {

const dispatch=useDispatch()

useEffect(()=>{
dispatch(getHotels);
},[])

  return (
    <div>ProductPage</div>
  )
}
