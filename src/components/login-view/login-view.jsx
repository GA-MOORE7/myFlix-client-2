import React from "react";
import { useState } from "react";

export const LoginView = ({ onLoggedIn }) => {
    const [Username, setUsername] = useState("");
    const [Password, setPassword] = useState("");

    const handleSubmit = (event) => {
        // this prevents the default behavior of the form which is to reload the entire page
    event.preventDefault();

    const data = {
        username: Username,
        password: Password
    };

    fetch("https://movies-flix-2-2c5b748a56db.herokuapp.com/login", {
        method: "POST",
        body: JSON.stringify(data)
        }).then((response) => {
            if (response.ok) {
                onLoggedIn(Username);
            } else {
                alert("login failed");
            }
        });
    };


    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input 
                    type="text"
                    value={Username}
                    onChange={(e) => setUsername(e.target.value)} 
                />
            </label>
            <label>
                Password:
                <input 
                    type="password"
                    value={Password}
                    onChange={(e) => setPassword(e.target.value)} 
                />
            </label>
            <button type="submit">
                Submit
            </button>
        </form>
    );
};