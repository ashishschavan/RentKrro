import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginComponent.css";
import { GoogleLogin, googleLogout } from '@react-oauth/google';


const LoginComponent = () => {
    const [username, SetUsername] = useState('');
    const [password, SetPassword] = useState('');
    const navigate = useNavigate();

    
    const responseMessage = (response) => {
        console.log(response);
    };

    const onLogoutSuccess = (response) => {
        console.log(response);
    };
    const errorMessage = (error) => {
        console.log(error);
    };
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
                    
                    <input type="text" value={username} onChange={handleUsernameChange} className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <input type="password" value={password} className="form-control" onChange={handlePasswordChange} placeholder="Password" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <button type="submit" className="btn btn-outline-success">Login</button>
                <p className="or-login">
                    OR
                </p>
                <div className="google-login">
                <GoogleLogin
                            onSuccess={responseMessage}
                            onError={errorMessage }
                        />
                        <googleLogout
                            clientId = '561085562174-0oecrrmdp768gk6pl6sp7dmti68ldp30.apps.googleusercontent.com'
                            onLogoutSuccess={onLogoutSuccess}
                            buttonText={"Logout"}
                        />
                    
                </div>
            </div>
        </form>

    )
}

export default LoginComponent;