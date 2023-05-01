import React from 'react'
import "./Footer.scss";

const Footer = () => {
  return (
      <div className='footer'>
          <div className="top">
              <div className="item">
                  <h1>Categories</h1>
                  <span>Women</span>
                  <span>Men</span>
                  <span>Shoes</span>
                  <span>Accessories</span>
                  <span>New Arrivals</span>
              </div>
              <div className="item">
              <h1>Links</h1>
                  <span>Women</span>
                  <span>Men</span>
                  <span>Shoes</span>
                  <span>Accessories</span>
                  <span>New Arrivals</span>
              </div>
              <div className="item">
                  <h1>About</h1>
                  <span>Lorem ipsum</span>
              </div>
              <div className="item">
                  <h1>Contact Us</h1>
                  <span>By telephone</span>
              </div>
          </div>
          <div className="bottom">
              <div className="left">
                  <span className='logo'>UPPAREL</span>
                  <span className='copyright'>
                  © Copyright 2023. All Rights Reserved
                  </span>
              </div>
              <div className="right">
                  <img src="img/payment.png" alt=''/>
              </div>
              
          </div>
    </div>
  )
}

export default Footer