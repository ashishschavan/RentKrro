import React, { useState } from "react";
import ProductCardComponent from './Components/ProductCard/ProductCardComponent';
import ProductDetailsComponent from './Components/ProductDetails/ProductDetailsComponent';
import LoginComponent from './Components/Login/LoginComponent';
import HomeComponent from './Components/Home/HomeComponent';
import RegisterComponent from './Components/Register/RegisterComponent';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const RoutesComponent = () => {

    return (

        <Routes>
            
            <Route path="/rentout" element={<RegisterComponent />}></Route>
            <Route path="/login" element={<LoginComponent />}></Route>
            <Route path="/home" element={<HomeComponent />}></Route>
            <Route path="/" element={<HomeComponent />}></Route>
            <Route path="/productdetails" element={<ProductDetailsComponent />}></Route>
            <Route path="/productcards" element={<ProductCardComponent />}></Route>

        </Routes>
    )
}
export default RoutesComponent;





