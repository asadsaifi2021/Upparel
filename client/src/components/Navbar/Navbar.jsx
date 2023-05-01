import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
import "./Navbar.scss";
import Cart from '../Cart/Cart'
import {
    faAngleDown,
    faMagnifyingGlass,
    faUserLarge,
    faHeart,
    faShoppingCart
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from 'react-redux';
  
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const products = useSelector(state => state.cart.products)

    return (
        <div className="navbar">
          <div className="wrapper">
            <div className="left">
              <div className="item">
                <img className='country' src="/img/en.png" alt="" />
                <FontAwesomeIcon className='downIcon' icon={faAngleDown} />
            </div>
            
              <div className="item">
                <span>CAD</span>
                <FontAwesomeIcon className='downIcon' icon={faAngleDown} />
              </div>
              <div className="item">
                <Link className ="link" to="/products/1">Women</Link>
              </div>
              <div className="item">
                <Link className ="link" to="/products/2">Men</Link>
            </div>
            
              <div className="item">
                <Link className ="link" to="/products/4">Kids</Link>
              </div>
              <div className="item">
                <Link className ="link" to="/products/5">Home</Link>
              </div>
              <div className="item">
                <Link className ="link" to="/products/7">Shoes</Link>
              </div>
            </div>
            <div className="center">
              <Link className ="link" to="/">UPPAREL</Link>
            </div>
            <div className="right">
              <div className="item">
                <Link className ="link" to="/">Home</Link>
              </div>
              <div className="item">
                <Link className ="link" to="/">About</Link>
              </div>
              <div className="item">
                <Link className ="link" to="/">Contact</Link>
              </div>
              <div className="item">
                <Link className ="link" to="/">Stores</Link>
              </div>
              <div className="icons">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                        <FontAwesomeIcon icon={faUserLarge} />
                        <FontAwesomeIcon icon={faHeart} />
                        <div className="cartIcon" onClick={()=>setOpen(!open)}>
                            <FontAwesomeIcon icon={faShoppingCart} />
                            <span>{products.length}</span>
                        </div>
              </div>
            </div>
        </div>
        {open && <Cart/>}
        </div>
      );
};

export default Navbar