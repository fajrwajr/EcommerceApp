import React, { useEffect, useState } from "react";
import { BrowserRouter } from 'react-router-dom';
import Axios from 'axios';

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState("");

  Axios.defaults.withCredentials = true;
  
  const login = () => {
    Axios.post("http://localhost:5001/login", { 
      username: username,
      password: password,
    }).then((response) => { 
      if (response.data.message) {
       setLoginStatus(response.data.message)
     } else {
     /* setLoginStatus(<BrowserRouter exact path="components/Home">
      <Home />
   </BrowserRouter>)*/
     } 
    })
  }

  useEffect(() => {
      Axios.get("http://localhost:5001/login").then((response) => {
        if (response.data.loggedIn == true) {
        setLoginStatus(response.data.user[0].username);
        }
      }) 
    }, [])
    return (
      <>
      <div className="login">
        <h1>Login</h1>
        <input type="text" placeholder="Username" onChange={(e) => {
          setUsername(e.target.value);
        } } />
        <input type="password" placeholder="Password" onChange={(e) => {
          setPassword(e.target.value);
        } } />
        <button onClick={login}>Login</button>
      </div><h1>{loginStatus}</h1>
    </>
    )
}
 