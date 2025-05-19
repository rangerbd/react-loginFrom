import React from "react";
import Input from "./input";

function Login(){
    return (
        <form className="form">
            <h1>Hello</h1>
        <input
            type = "text"
            placeholder = "username"
        />

        <input
            type="text"
            placeholder="password"
        />
        <button type="submit">Login</button>
      </form>
    )
}

export default Login;