import React from 'react';
import { useSelector } from 'react-redux';
import { getItemSelector } from '../redux/slices/cartSlice';


const Cart = () => {
  const items = useSelector(getItemSelector);
  const getItems = [...items]
  console.log(getItems)
  const total = items.reduce((a, b) => a + b.price, 0)
  return (
    <>
      <div className='container-fluid'>
      <div className='row cart_page'>
          <div className='col-md-6 col-sm-10 cart_product'>
          <span style={{ textAlign: 'center', color: 'green', fontFamily: 'monospace', fontSize: '1.5rem' }} >Total Number Of Products </span>
       
            {
              getItems.map((ele) => {
                return (
                  <>
                    <div className='container-fluid'>
                      <div className='row card_align'>
                        <div className="card" style={{ width: "18rem" }}>
                          <img src={ele.img} className="card-img-top" alt="..." />
                          <div className="card-body">
                            <h5 className="card-title">{ele.name}</h5>
                            <p className="card-text">Price : {ele.price}₹ </p>
                            <button className="btn btn-primary">Buy Now</button>
                          </div>
                        </div>
                      </div>
                    </div>

                  </>
                )
              })
            }
          </div>

          <div className='col-md-6 col-sm-10' style={{ float: 'right' }} >
            <div className='Payment_page'>
              <span className='total_amount'>
                Total Payable Amount : ₹{total}
              </span><br />
              <span >Total Remaining Amount : ₹0</span><br/>
              <button className='btn btn-success'>Proceed To Pay</button>
            </div>
            
          </div>

        </div>
      </div>
    </>
  )
}

export default Cart;