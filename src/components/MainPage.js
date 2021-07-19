import React from "react";
import Hero from "./Hero.js";
import ProductFilter from "./ProductFilter.js/index.js";
import ProductsList from "./ProductsList/index.js";
import Footer from "./Footer";

const MainPage = () => {
  return (
    <div>
      <Hero />
      <ProductFilter />
      <ProductsList />
      <footer><Footer /></footer>
    </div>
  );
};

export default MainPage;
