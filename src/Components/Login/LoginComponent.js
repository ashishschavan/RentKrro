import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginComponent.css";
const LoginComponent = () => {
    const [username, SetUsername] = useState('');
    const [password, SetPassword] = useState('');
    const navigate = useNavigate();
    const Data = {
        name: 'Femi',
        phoneNumber: 123
    }
    const handleSubmit = e => {
        if (username === "ashish" && password === "password") {
            navigate("/home", {
                state: {
                    name: "John Doe",
                    age: 30,
                },
            });
        }

        e.preventDefault();

    }
    const handleUsernameChange = (event) => {
        SetUsername(event.target.value);
    };
    const handlePasswordChange = (event) => {
        SetPassword(event.target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="main-div-login">
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">@</span>
                    <input type="text" value={username} onChange={handleUsernameChange} className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <input type="password" value={password} className="form-control" onChange={handlePasswordChange} placeholder="Password" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <button type="submit" className="btn btn-outline-success">Login</button>
            </div>
        </form>
    )
}

export default LoginComponent;