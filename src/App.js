import './App.css';
import React, { useState } from "react";
// import { BrowserRouter, Route } from "react-router-dom";
import Login from "./component/Login";
import Appp from "./component/Appp";

function App() {
  const [username, setUsername] = useState(null);

  function handleLogin(user){
    setUsername(user)
  }
  function handleLogout(){
    setUsername(null)

  }

  return (
   
      <div>
        {username ? (<Appp usename={username}
                   onlogout={handleLogout}/>):(
                    <Login onLogin={handleLogin}/>
                   )}

     </div>
  );
}

export default App;