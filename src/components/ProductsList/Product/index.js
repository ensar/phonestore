import React from "react";
import "./product.css";
import { Link } from "react-router-dom";

const Product = ({ phone }) => {
  return (
    <div className="box">
      <img alt="box" src={phone.colors[0].images[0]} />
      <div className="brand">{phone.brand}</div>
      <h3>{phone.name}</h3>
      <div className="boxFooter">
        <h3>{Number(phone.price).toLocaleString()} TL</h3>
        <Link to={`/${phone.id}`} className="boxBtn">
          İncele
        </Link>
      </div>
    </div>
  );
};

export default Product;
