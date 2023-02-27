import React from 'react'
import PulseLoader from 'react-spinners/PulseLoader'
import useFetch from '../Fetcher/useFetch'
import {Link, useParams} from 'react-router-dom'


const SingleProduct = () => {
  const {id} = useParams()
  const {data, isLoading, error} = useFetch(
    `https://fakestoreapi.com/products/${id}`
  )
  console.log(id)
  const {title, description, price, rating, image} = data
  return (
    <div>
        {isLoading && <PulseLoader/>}
        {error && <h2>{error.message}</h2>}
        <h2>single product</h2>
        <h2>{id}</h2>
        <img src={image} alt="" />
        <h2>{title}</h2>
        <p>{description}</p>
        <h3>${price}</h3>
        <Link to='/Products'> Back To Products Page</Link>

    </div>
  )
}

export default SingleProduct