import React, { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { connect } from "react-redux";
import { changeCount, removeFromCart } from "../../../redux/actions";

const BasketItem = ({ cart, i, removeFromCart, changeCount }) => {
  const [count, setCount] = useState(cart[i].count);

  const counter = (e) => {
    setCount(e.target.value);
    changeCount(cart[i].id, e.target.value);
  };
  return (
    <div className="order" key={cart[i]?.id}>
      <div className="orderDetail">
        <img alt="item" src={`${cart[i]?.colors[0].images[0]}`} />
        <div className="name">{cart[i].name}</div>
      </div>
      <div className="count">
        <input
          type="number"
          min="1"
          value={count}
          onChange={(e) => counter(e)}
        />
      </div>
      <div className="orderPrice">{cart[i]?.price * count} TL</div>
      <button className="delBtn" onClick={() => removeFromCart(cart[i]?.id)}>
        <FaRegTrashAlt />
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    changeCount: (id, e) => dispatch(changeCount(id, e)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BasketItem);
