import React from 'react'
import { useSelector } from 'react-redux'
import { CiHeart } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";


const Like = () => {
    const like = useSelector((state) => state.wishlist);
    const dispatch = useDispatch();
    const products = like?.wishlist?.map((el) => (
        <div className="product" key={el.id}>
        <div className="product_category">
          <span>{el.category}</span>
        </div>
        <div className="product_img">
          <img src={el.images[0]} alt={el.title} />
          <div className="product_icon">
            <button onClick={() => dispatch({ type: "TOGLELIKE", payload: el })}>
              {
                like.wishlist.some((item) => item.id === el.id) ? (
                  <FaHeart style={{ color: "red" }} />
                ) : (
                  <CiHeart />
                )
              }
            </button>
  
            <button onClick={() => dispatch({ type: "ADDCART", payload: el })}>
              <FiShoppingCart />
            </button>
          </div>
        </div>
        <div className="product_info">
          <h2>{el.title}</h2>
          <p>stock {el.stock}</p>
          <p>price ${el.price}</p>
        </div>
      </div>
    ))
  return (
    <>
      <div className="container">
        <h1 className="title">Wishlist</h1>
        <div className="wrapper_product">
            {products}
        </div>
      </div>
    </>
  )
}

export default Like