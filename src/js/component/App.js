import React, { useState } from "react";

//import Home from "./component/home.jsx";
//import { BrowserRouter } from 'react-router-dom';
import Axios from 'axios';
//import Login from "./component/login.jsx";

export const App = () => {
    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");

    //const [username, setUsername] = useState("");
    //const [password, setPassword] = useState("");

    //const [loginStatus, setLoginStatus] = useState("");

    Axios.defaults.withCredentials = true;

    
    const register = () => {
      Axios.post("http://localhost:5001/register", { 
        username: usernameReg,
        password: passwordReg,
      }).then((response) => {
        console.log(response);
      })
    }
   /* const login = () => {
      Axios.post("http://localhost:5001/login", { 
        username: username,
        password: password,
      }).then((response) => { 
        if (response.data.message) {
         setLoginStatus(response.data.message)
       } else {
        setLoginStatus(<BrowserRouter exact path="components/Home">
        <Login />
     </BrowserRouter>)
       } 
      })
    }*/

   /* useEffect(() => {
      Axios.get("http://localhost:5001/login").then((response) => {
        if (response.data.loggedIn == true) {
        setLoginStatus(response.data.user[0].username);
        }
      }) 
    }, [])
*/
  return (
    <div className="App">
       <div className="registration">
         <h1>Registration</h1>
         <label>Username</label>
         <input type="text" onChange={(e) => {
           setUsernameReg(e.target.value);
         }}
         />
         <label>Password</label>
         <input type="text" onChange={(e) => {
           setPasswordReg(e.target.value);
         }}
         />
         <button onClick={register}>Register</button>
       </div>
        </div>
  );
}