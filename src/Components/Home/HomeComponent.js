import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import ProductCardComponent from '../ProductCard/ProductCardComponent'

const HomeComponent = () => {

    return (
        <div>
            <ProductCardComponent />
        </div >

    )
}
export default HomeComponent;