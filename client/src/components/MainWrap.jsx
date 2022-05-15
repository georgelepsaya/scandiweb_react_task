import React from "react";
import ProductListingPage from "../pages/ProductListingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import styled from "styled-components";
import ProductDescriptionPage from "../pages/ProductDescriptionPage";
import CartPage from "../pages/CartPage";
import Footer from "./Footer";

const MainContainer = styled.main`
  margin-top: 80px;
  display: flex;
  justify-content: center;
`

const ProductsContainer = styled.div`
  width: 85%;
`

const MainWrap = (props) => {
  const allData = props.data;
  if (allData) {
    return (
      <Router>
        <header>
          <Navbar data={allData} />
        </header>
        <MainContainer id="main">
          <ProductsContainer>
            <Routes>
              {allData.categories.map(category => {
                return <Route key={Math.random()} path={`${category.name}`} element={<ProductListingPage data={category.products} category={`${category.name}`} />} />
              })}
              <Route path="/product/:id" element={<ProductDescriptionPage data={allData.categories[0].products} />} />
              <Route path="/cart" element={<CartPage data={allData} />} />
            </Routes>
          </ProductsContainer>
        </MainContainer>
        <Footer />
      </Router>
    );
  }
};

export default MainWrap;