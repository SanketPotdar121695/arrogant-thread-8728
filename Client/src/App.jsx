/** @format */

import "./App.css";
import Home from "./pages/Home";
import { Login } from "./pages/Login";
import { Signup } from "./pages/SignUp";

function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      <Signup />
      <br />
      <br />
      {/* <Login/> */}
    </div>
  );
}

export default App;
