import React, { useState } from "react";
import './ProductDetailsComponent.css';
import img from '../../Images/i5.png'
const ProductDetailsComponent = () => {

    return (
        <div class="card product-card">
            <div class="row">
                <div class="col-sm-6">
                    <img class="card-img product-img" src={img} />
                </div>
                <div class="col-sm-6">
                    <div class="card-body">
                        <div className="product-price-box">
                            <h3 class="card-title">₹14000/Month</h3>
                            <h4>Jeep Compass Trailhawk (2019)</h4>
                            <p class="card-text">Deposit: ₹20000</p>
                        </div>
                        <div className="product-owner-box">
                            <h4>Ashish Sunil Chavan</h4>
                            <p class="card-text">Deposit: ₹20000</p>
                            <a href="#" class="btn btn-outline-secondary">Show Number</a>
                        </div>
                        <div className="product-owner-box">
                            <h4>Jeep Compass Trailhawk (2019)</h4>
                            <p class="card-text">Deposit: ₹20000</p>
                            <a href="#" class="btn btn-primary">View Profile</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductDetailsComponent;