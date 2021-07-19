import React, { useEffect } from "react";
import "./productList.css";
import Product from "./Product";
import { connect } from "react-redux";
import { getProducts } from "../../redux/actions";
import { Spinner, Alert } from "react-bootstrap";

const ProductsList = (props) => {
  useEffect(() => {
    props.getProducts();
  }, []);

  const sortedList =
    props.sort === true
      ? props.phones.sort((a, b) => b.price - a.price)
      : props.sort === false
      ? props.phones.sort((a, b) => a.price - b.price)
      : props.phones;

  return (
    <div className="productContainer">
      {props.isLoading && <Spinner animation="border" role="status"></Spinner>}

      {props.isLoading === false &&
        sortedList.map((phone) => {
          return <Product key={phone.id} phone={phone} />;
        })}
      {props.errorMessage && (
        <Alert variant="danger">{props.errorMessage}</Alert>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    phones: state.phones,
    isLoading: state.isLoading,
    errorMessage: state.errorMessage,
    sort: state.sort,
  };
};
export default connect(mapStateToProps, { getProducts })(ProductsList);
