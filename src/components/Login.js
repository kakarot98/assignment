import React, { useState } from "react";
import { useAuth } from "../hooks/auth";

const Login = () => {
  const { user, login, logout } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");

  const loginToApp = (e) => {
    e.preventDefault();

    const isLoggedIn = login(username, password);
    if (!isLoggedIn) {
      setpassword("");
    }
  };

  return (
    <div>
      <form>
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
          <button onClick={loginToApp}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
