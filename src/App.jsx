import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Nav from "./Components/_Nav/Nav";
import Login from "./Views/Login/Login";
import Home from "./Views/Home/Home";
import About from "./Views/_Page-Sections/About/About";
import PP from "./Views/_Page-Sections/Privacy-Policy/PP";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />

        <Routes>
          <Route path='Login' element={<Login />}/>
          <Route path='/' element={<Home />}/>
          <Route path='About' element={<About />}/>
          <Route path='PP' element={<PP />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
