import React, { useEffect, useState } from "react";
import "./detail.css";
import { connect } from "react-redux";
import { Spinner, Alert } from "react-bootstrap";
import { getDetails, addToCart } from "../../redux/actions";

const ProductDetail = ({ match, getDetails, addToCart, isLoading, detail,cart }) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    localStorage.setItem("phones", JSON.stringify(cart));
  }, [cart]);


  const add = () => {
    addToCart(detail?.id);
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 500);
  };
  useEffect(() => {
    (async () => {
      await getDetails(match.params.id);
    })();
  }, [match.params.id]);

  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [currentColor, setCurrentColor] = useState(0);

  const imagesLength = detail?.colors[currentColor]?.images.length;
  const prev = () => {
    currentPhoto === 0
      ? setCurrentPhoto(imagesLength - 1)
      : setCurrentPhoto(currentPhoto - 1);
  };

  const next = () => {
    currentPhoto === detail.colors[currentColor].images.length - 1
      ? setCurrentPhoto(0)
      : setCurrentPhoto(currentPhoto + 1);
  };

  const nextColor = (i) => {
    setCurrentPhoto(0);
    setCurrentColor(i);
  };

  return (
    <div className="detail">
      {show && (
        <Alert variant="success" className="fixed-top w-100">
          Sepete Eklendi
        </Alert>
      )}
      {isLoading ? (
        <Spinner animation="border" role="status"></Spinner>
      ) : (
        <>
          <div className="productPhotos">
            <img
              alt="productPhoto"
              src={`${detail?.colors[currentColor].images[currentPhoto]}`}
            />
            <button className="prev" onClick={prev}>
              &#8249;
            </button>
            <button className="next" onClick={next}>
              &#8250;
            </button>
          </div>
          <div className="productDetails">
            <div className="detailHeader">
              <h1>{detail?.name}</h1>
              <h2>{Number(detail?.price).toLocaleString()} TL</h2>
            </div>
            <ul>
              {detail?.details.map((detail, i) => {
                return <li key={i}>{`${detail}`}</li>;
              })}
            </ul>
            <div className="colors">
              {detail?.colors.map((color, i) => {
                return (
                  <button
                    key={i}
                    className="color"
                    onClick={() => nextColor(i)}
                  >
                    {color.color}
                  </button>
                );
              })}
            </div>
            <button className="addBasket" onClick={() => add()}>
              Sepete Ekle
            </button>
          </div>
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    detail: state.productDetail,
    cart:state.cart
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getDetails: (id) => dispatch(getDetails(id)),
    addToCart: (id) => dispatch(addToCart(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
