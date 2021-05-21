import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");

  const loginToApp = (e) => {
    e.preventDefault();
    console.log(username + password);
    setUsername("");
    setpassword("");
  };

  return (
    <div>
      <form onSubmit={loginToApp}>
        <h1>Login</h1>
        <div>
          <label>Username: </label>
          <input
            name="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            name="password"
            type="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
