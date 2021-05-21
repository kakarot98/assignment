import "./App.css";
import React, { Suspense } from "react";
import Login from "./components/Login";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import dataArray from "./components/data";
import { useAuth } from "./hooks/auth";

function App() {
  const { user, login, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      {user ? (
        <div>
          <button onClick={handleLogout}>Logout</button>
          <Suspense fallback="Loading...">
            {dataArray.map((el, key) => {
              return (
                <HomePage
                  component={el.component}
                  componentProps={el.props}
                  key={key}
                />
              );
            })}
          </Suspense>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
