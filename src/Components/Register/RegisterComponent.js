import React, { useState } from "react";
import "./RegisterComponent.css";
const RegisterComponent = () => {

    const[username,SetUsername] = useState('');
    const[password,SetPassword] = useState('');

    const handleSubmit = (event) =>{
        alert(username);
        event.preventDefault();
        // axios.post('https://localhost:7297/api/Register', {
        //     Username: username,
        //     Password: password,
        //     Name : "abc",
        //     Email: "abc"
        //   })
        //   .then((response) => {
        //     console.log(response.data);
        //       alert(response.data?"login successful":"login Failed");
        //   })
        //   .catch((error) => {
        //     console.log(error);
        //   })
    }
    const handleUsernameChange = (event) => {
        SetUsername(event.target.value);
    };
    const handlePasswordChange = (event) => {
        SetPassword(event.target.value);
    };
    return (
        <form onSubmit={handleSubmit}>
            <div className="main-div-register">
                <div className="input-group mb-3" data-testid="username">
                    <span className="input-group-text" id="basic-addon1">@</span>
                    <input type="text" value={username} onChange={handleUsernameChange} class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Email Address" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    <span className="input-group-text" id="basic-addon2">@example.com</span>
                </div>
                <div className="input-group mb-3">
                    <input type="password" value={password} className="form-control" onChange={handlePasswordChange} placeholder="Password" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <input type="password" className="form-control" placeholder="Confirm Password" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <button type="submit" className="btn btn-outline-success">Register</button>
            </div>
        </form>
    )
}
export default RegisterComponent;