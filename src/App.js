
import './App.css';
// import Fetcher from './componenets/Fetcher';
import Home from './componenets/Home';
import About from './componenets/About';
import Products from './componenets/Products';
import Error from './componenets/Error';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Footer from './componenets/Footer';
import Navbar from './componenets/Navbar';
import SingleProduct from './componenets/SingleProduct'
import { useState, useEffect } from 'react'
import Cart from './componenets/Cart';

const cartItemsFromLocalStorage = JSON.parse(localStorage.getItem('cartItem')) || []


function App() {
  const [cartItem, setCartItems,] = useState(cartItemsFromLocalStorage)
  useEffect(() =>{
    localStorage.setItem('cartItem', JSON.stringify(cartItem))
  },[cartItem])
  function handleAddToCart(Product) {
    const productSelected = cartItem.find(
      (singleItem) => singleItem.id === Product.id
    );
    if (productSelected) {
      setCartItems(
        cartItem.map((oneItem) =>
          oneItem.id === Product.id
            ? { ...productSelected, quantity: productSelected.quantity + 1 }
            : oneItem
        )
      );
    } else {
      setCartItems([...cartItem, { ...Product, quantity: 1 }]);
    }
  }
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar cartItem = {cartItem} />
      <Routes>
        <Route index element ={<Home/>}/>
        <Route path="About" element ={<About/>}/>
        <Route path="Products" element ={<Products cartItem = {cartItem}  setCartItems = {setCartItems}  handleAddToCart = {handleAddToCart}
        />}/>
        <Route path="Cart" element ={<Cart cartItem = {cartItem}  setCartItems = {setCartItems}  handleAddToCart = {handleAddToCart}
        />}/>
        <Route path="SingleProduct/:id" element ={<SingleProduct/>}/>
        <Route path="*" element ={<Error/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      {/* <Fetcher/> */}

 
    </div>
  );
}

export default App;
