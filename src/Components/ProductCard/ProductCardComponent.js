import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const ProductCardComponent = () => {
    const componentsData = [
        { id: 1, name: 'Component 1', img: '' },
        { id: 2, name: 'Component 2', img: '' },
        { id: 3, name: 'Component 3', img: '' },
        { id: 4, name: 'Component 4', img: '' },
        { id: 5, name: 'Component 5', img: '' },
        { id: 6, name: 'Component 6', img: '' },
        { id: 7, name: 'Component 7', img: '' },
        { id: 8, name: 'Component 8', img: '' },
        // Add more components as needed
      ];
    return (
        <div class="card">
            <Link to="/productdetails">
                <div className="grid-container">

                    {componentsData.map((component) => (
                        <div key={component.id} className="grid-item">
                            <p>{component.name}</p>
                        </div>
                    ))}

                </div>
            </Link>
        </div>
    )
}
export default ProductCardComponent;