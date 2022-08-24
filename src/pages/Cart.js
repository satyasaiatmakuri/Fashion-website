import React from 'react'
import {useSelector} from 'react-redux'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import '../styles/cart.css'
import { useDispatch } from 'react-redux';
import { addCart, delCart } from '../redux/actions';

function Cart() {
  const state=useSelector((state)=> state.handleCart)
  var total= 0;

  const dispatch = useDispatch();
    const addProduct = (product)=>{
        dispatch(addCart(product));
    }
    const delProduct = (product)=>{
      dispatch(delCart(product));
    }
  return (
    <div className='cart'>
      <div className='container py-4'>
        <h3>product Items in the cart : {state.length}</h3>
        {state.map((product)=>{
            total=(product.qty*product.price)+total;
          return(
            <>
            <div className='row my-5 p-5 productitem'>
              <div className='col-md-4 align-self-center'>
                  <img src={product.image} alt={product.title} 
                      height="100%" width="200px"/>
              </div>
              <div className='col-md-8 align-self-center'>
                  <h2 className='display-5'>{product.title}</h2>
                  <h4 className='display-6 fw-bold my-4'>
                      {product.price}₹
                  </h4>
                  <ButtonGroup aria-label="Basic example">
                    <Button variant="secondary" onClick={()=>addProduct(product)}>+</Button>
                    <Button variant="light">{product.qty}</Button>
                    <Button variant="secondary" onClick={()=>delProduct(product)}>-</Button>
                  </ButtonGroup>
                  <h4 className='display-6 my-4'>
                      Total Price : {product.price*product.qty}₹
                  </h4>
              </div>
            </div>
            </>
          )
        })}
        <h3>Cart Price :{total} </h3>
        <Button variant="secondary" className='my-3'>Order Now</Button>
      </div>
    </div>
  )
}

export default Cart
