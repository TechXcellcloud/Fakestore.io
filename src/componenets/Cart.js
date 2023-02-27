import React from 'react';
import useFetch from '../Fetcher/useFetch';

const Cart = ({cartItem,setCartItems}) => {
  const { data, isLoading, error } = useFetch(
    'https://fakestoreapi.com/products'
  )
  const totalPrice = cartItem.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  )
  function handleIncrease(product) {
    const productSelected = cartItem.find(
      (singleCart) => singleCart.id === product.id
    )
    if (productSelected) {
      setCartItems(
        cartItem.map((oneItem) =>
          oneItem.id === product.id
            ? { ...productSelected, quantity: productSelected.quantity + 1 }
            : oneItem
        )
      )
    } else {
      setCartItems([...cartItem, { ...product, quantity: 1 }])
    }
  }
  function handleDecrease(product) {
    const productSelected = cartItem.find(
      (singleCart) => singleCart.id === product.id
    )
    if (productSelected.quantity === 1) {
      setCartItems(cartItem.filter((oneItem) => oneItem.id !== product.id))
    } else {
      setCartItems(
        cartItem.map((sItem) =>
          sItem.id === product.id
            ? { ...productSelected, quantity: productSelected.quantity - 1 }
            : sItem
        )
      )
    }
  }
  return (
    <div>
      <h2>Cart componenet</h2>
      <div>
        {cartItem.length === 0 && (
          <div>
            <h3>No items in the cart </h3>
          </div>
        )}
      </div>

      <div>
        {cartItem.map((item) => {
          const { image, id, title, price, quantity } = item
          return (
            <div key={id} className='cart-items-list'>
              <img className='cart-items-image' src={image} alt='' />
              <div className='cart-items-name'>
                <h2> {title} </h2>
              </div>
              <div className='cart-items-function'>
                <button
                  className='cart-items-add'
                  onClick={() => handleIncrease(item)}
                >
                  inc
                </button>
                <button
                  className='cart-items-remove'
                  onClick={() => handleDecrease(item)}
                >
                  Dec
                </button>
              </div>
              <div className='cart-items-price'>
                <h4>
                  {quantity} * {price}
                </h4>
              </div>
            </div>
          )
        })}
      </div>
      {cartItem.length >= 1 && (
        <div>
          <button
            style={{
              backgroundColor: 'red',
              color: 'white',
              width: '10rem',
              fontSize: '30px',
              borderRadius: '10px',
            }}
            onClick={() => setCartItems([])}
          >
            {cartItem.length === 1 ? 'clear item' : 'clear all'}
          </button>
        </div>
      )}
      <div className='cart-items-total-price-name'>
        Total Price
        <div className='cart-items-total-price'>#{totalPrice}</div>
      </div>
    </div>
  )
}

export default Cart