import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ProvideAuth } from "./hooks/auth";

ReactDOM.render(
  <React.Fragment>
    <ProvideAuth>
      <App />
    </ProvideAuth>
  </React.Fragment>,
  document.getElementById("root")
);
