import React from "react";
import Home from "./screens/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import MyCart from "./screens/MyCart";
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from "./components/ContextReducer";


function App() {
  return (
    <CartProvider>
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/createuser" element={<SignUp/>} />
          <Route exact path="/mycart" element={<MyCart/>} />
        </Routes>
      </div>
    </Router>
    </CartProvider>
  );
}
export default App;