import React, { useState } from "react";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault()
    if (username === "Yashjain" && password === "emp@ariveguru") {
     
      onLogin(username);
    }
     else if(username=== "" && password=== "")
      {
      alert("Login failed.All fiels are empty. Please check your credentials.");
    }
    else if(username!== "Yashjain" && password=== "emp@ariveguru")
      {
      alert("Login failed.Username is not matching.");
    }

    else if(username=== "Yashjain" && password!=="emp@ariveguru")
    {
    alert("Login failed. Password is not matching.");
  }
  }

  return (
    <div className="container1">
      <h2>Login</h2>
      <input
        type="text" placeholder="Username" value={username}
        onChange={(e) => setUsername(e.target.value)} />
     
      <input
       type="password" placeholder="Password" value={password}
       onChange={(e) => setPassword(e.target.value)} />

       <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;