import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const HomeComponent = () => {

    const location = useLocation();

  const name = location.state.name;
  const age = location.state.age;

    return (
        <div>
            <h1>Home Component</h1>
            <p>
                my username is {name}
            </p>
        </div >

    )
}
export default HomeComponent;