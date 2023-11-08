import React, { useState } from "react";

const CategoriesComponent = () => {

    return (
        <div className="container-fluid">
            <nav class="navbar navbar-expand-lg navbar-light row w-100">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav ">
                        <li class="nav-item dropdown ">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            ALL CATEGORIES
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Electronics & Appliances</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Vehicles</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Pricing</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Properties</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Travel</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Books, Sports & Hobbies</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Fashion</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div >

    )
}
export default CategoriesComponent;