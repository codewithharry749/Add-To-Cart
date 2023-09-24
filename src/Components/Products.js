import React from 'react'
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/slices/cartSlice';

const Products = (props) => {
    const dispatch = useDispatch()
  return (

         <div className='container-fluid'>
                <div className='row card_align'>
                  <div className="card" style={{ width: "18rem" }}>
                    <img src='...' className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{props.productName}</h5>
                      <p className="card-text">Price : {props.price}₹ </p>
                      <button onClick={(e)=>dispatch(addItem({ image: props.image ,name:props.productName , price : props.price }))} className="btn btn-primary">Add To Cart</button>
                    </div>
                  </div>
                </div>
              </div>
   
  )
}

export default Products;
