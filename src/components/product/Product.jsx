import React from "react";
import "./Product.css";
import { UseEfect } from "../../hook/UseEfect";
import { CiHeart } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";

const Product = () => {
  const { data, loading } = UseEfect("products?limit=8");
console.log(data);
  let products = data?.products.map((el) => (
    <div className="product" key={el.id}>
        <div className="product_category"><span>{el.category}</span></div>
        <div className="product_img">
             <img src={el.images[0]} alt={el.title} />
             <div className="product_icon">
                <CiHeart/>
                <FiShoppingCart/>
             </div>
        </div>
        <div className="product_info">
            <h2>{el.title}</h2>
             <p>stock {el.stock}</p>
             <p>price ${el.price}</p>
        </div>
    </div>
  ));
  return (
    <>
      <div className="container">
        <div className="wrapper_product">
            {products}
        </div>
      </div>
    </>
  );
};

export default Product;
