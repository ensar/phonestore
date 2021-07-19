import React, { useState } from "react";
import "./navbar.css";
import { FaSun, FaMoon, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Navbar = ({ cart }) => {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    document.body.classList.toggle("dark");
  };
  return (
    <nav>
      <Link to="/" className="navLogo">
        PHONE STORE
      </Link>
      <div className="menu">
        <button
          onClick={() => {
            changeTheme();
          }}
        >
          {theme === "light" ? (
            <FaMoon size={25} />
          ) : (
            <FaSun size={25} color="white" />
          )}
        </button>
        <Link to="/basket" className="basket">
          <FaShoppingCart
            size={25}
            color={theme === "light" ? "black" : "white"}
          />
          <span className="basketCount">{cart.length}</span>
        </Link>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};
export default connect(mapStateToProps)(Navbar);
