import React from "react";
import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import { CiHeart, CiCircleRemove } from "react-icons/ci";
import {incrementquantity, decrementquantity, removeItem} from '../../lib/reducer/AddCart.js'

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  let carts = cart?.cart?.map((el) => (
    <div className="cart" key={el.id}>
      <div className="cart_img">
        <img src={el.images[0]} alt="" />
        <h2>{el.title}</h2>
        <div className="cart_icon">
          <button>
            <CiHeart />
          </button>
          <button onClick={() => dispatch(removeItem(el.id))}>
            <CiCircleRemove />
          </button>
        </div>
      </div>
      <div className="cart_price">
        <p>${el.price}</p>
        <div className="cart_count">
          <button 
          onClick={
            () => dispatch(incrementquantity(el.id))
          }>+</button>
          <button>{el.quantity}</button>
          <button
          onClick={() => dispatch(decrementquantity(el.id))}>-</button>
        </div>
      </div>
    </div>
  ));

  console.log(cart);
  return (
    <>
      <div className="container">
        <div className="cart_wrapper">
                {carts}
        </div>
      </div>
    </>
  );
};

export default Cart;
