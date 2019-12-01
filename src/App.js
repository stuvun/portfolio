import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light">
        <nav className="nav-link navbar-brand">My Portfolio</nav>

        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <Link to="/" className="nav-item nav-link">Home</Link>
          <Link to="/about" className="nav-item nav-link">About</Link>
          <Link to="/projects" className="nav-item nav-link">Projects</Link>
        </ul>
      </nav>
      <Route path="/" exact component={Home}></Route>
    </Router>
  );
}

export default App;
