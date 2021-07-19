import React from "react";
import "./productfilter.css";
import { connect } from "react-redux";
import { sortedList } from "../../redux/actions";

const ProductFilter = ({ phones, sortedList }) => {
  const { length } = phones;
  return (
    <div className="productFilter">
      <select onClick={(e) => sortedList(e.target.options.selectedIndex)}>
        <option disabled>Sırala</option>
        <option>En Düşük Fiyat</option>
        <option>En Yüksek Fiyat</option>
      </select>
      <div className="sayi">{length} ürün listeleniyor</div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    phones: state.phones,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    sortedList: (e) => dispatch(sortedList(e)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductFilter);
