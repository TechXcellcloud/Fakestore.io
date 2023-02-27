import React from "react";
import { Link } from "react-router-dom";
import Marque from "./Marque";

const Navbar = ({ cartItem }) => {
  console.log(cartItem);
  return (
    <div>
      <div className="soft">
        <div className="shop">
          <h2>
            <span>Annie's</span> <span>Luxury</span> 
          </h2>
        </div>

        <div className="link">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="About">About</Link>
            </li>
            <li>
              <Link to="Products">Products</Link>
            </li>
            <li>
              <Link to="Cart">🛒Cart ({cartItem.length})</Link>
            </li>
            <button>LOG IN</button>

            <li>
              <Link to="Products">Sign Up</Link>
            </li>
          </ul>
        </div>
      </div>
      <Marque />
    </div>
  );
};

export default Navbar;
