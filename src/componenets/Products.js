import React, { useState, useEffect } from "react";
import PulseLoader from "react-spinners/PulseLoader";
import Jewelries from "./Jewelries";
import Men from "./Men";
import Electornics from "./Electornics";
import Women from "./Women";

const Products = ({ cartItem, setCartItems, handleAddToCart }) => {
  return (
    <div className="data">
      <Jewelries cartItem={cartItem} setCartItems={setCartItems} handleAddToCart = {handleAddToCart} />
      <Men cartItem={cartItem} setCartItems={setCartItems} handleAddToCart = {handleAddToCart} />
      <Electornics cartItem={cartItem} setCartItems={setCartItems} handleAddToCart = {handleAddToCart} />
      <Women cartItem={cartItem} setCartItems={setCartItems} handleAddToCart = {handleAddToCart} />
    </div>
  );
};

export default Products;
