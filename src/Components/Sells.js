import React, { useState } from 'react';
import productData from './products.json'
import Products from './Products';

const Sells = () => {

  return (
    <div>
      {
        productData.map((ele, ind) => {
          return (
      <Products {...ele} />
          )
        })
      }
    </div>
  )
}

export default Sells;