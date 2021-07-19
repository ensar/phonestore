import React, { useEffect } from "react";
import "./basket.css";
import BasketItem from "./BasketItem";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Basket = ({ cart }) => {
  const total = cart.reduce((acc, item) => acc + item.price * item.count, 0);

  useEffect(() => {
    localStorage.setItem("phones", JSON.stringify(cart));
    cart.length === 0 && localStorage.removeItem("phones");
  }, [cart]);

  const { length } = cart;
  return (
    <div className="basketContainer">
      <div className="basketLeft">
        <h4>{length} ürün</h4>
        <div className="orders">
          {!length ? <h4>Sepetiniz Boş</h4> : null}
          {cart.map((item, i) => {
            return <BasketItem key={item.id} i={i} />;
          })}

          <Link className="goShopping" to="/">
            Alışverişe devam et
          </Link>
        </div>
      </div>
      <div className="basketRight">
        <h4>Sipariş Özeti</h4>
        <h6>Tutar : {Number(total).toLocaleString("en-US")}</h6>
        <h6>Teslimat Ücreti : {!length ? "0 TL" : "8,99 TL"}</h6>
        <h5>
          Toplam Tutar:{" "}
          {Number(total + Number(length && 8.99)).toLocaleString("en-US")} TL
        </h5>
        <button>Siparişi Tamamla</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};
export default connect(mapStateToProps)(Basket);
