import React from 'react'
import PulseLoader from 'react-spinners/PulseLoader'
import useFetch from '../Fetcher/useFetch'
import {Link} from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Men = ({handleAddToCart}) => {
    const { data, isLoading, error } = useFetch(
      'https://fakestoreapi.com/products/category/Men\'s clothing'
    )
    const notify = () => toast("An item has been added");
  return (
    <div>
      {isLoading && <PulseLoader />}
      {error && <h2>{error.message}</h2>}
      <h2>Men Category</h2>
      <div className='innerdata'>
        {data.map((datum) => {
          const { id, image, rating, price } = datum
          return (
            <div className='innerdatas' key={id}>
              <Link to={`/SingleProduct/${id}`}>
              <img src={image} alt='' className='images' />
              <div id='rp'>
                <h2>Rate {rating.rate}</h2>
                <h3 id='hh'>Price ${price}</h3>
              </div>
              </Link>
              
              <button
                id="cart"
                onClick={() => {
                  handleAddToCart(datum);
                  notify();
                }}
              >
                🛒 Add to cart
              </button>
            </div>
          )
        })}
      </div>
      <ToastContainer/>
    </div>
  )
}

export default Men