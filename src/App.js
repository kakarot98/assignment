import "./App.css";
import Login from "./components/Login";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import dataArray from "./components/data";
import dataArray1 from "./components/data1";

function App() {
  return (
    <div>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
        </ul>
      </nav> */}
      {/* <Login /> */}
      <div>{dataArray.map((data) => HomePage(data))}</div>
    </div>
  );
}

export default App;
