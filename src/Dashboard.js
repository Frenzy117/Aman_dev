import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './Dashboard.css';
import './Components/NavBar/NavBar.css'
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import Experience from "./Components/Experience/Experience";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";
import DarkMode from "./Components/DarkMode/DarkMode";


function Dashboard() {
  return (
    <div className="Dashboard">
      <NavBar/>
      <DarkMode/>
      <Router>
          <Routes>
            <Route path="/" Component={Home}/>
            <Route path="/about" Component={About}/>
            <Route path="/experience" Component={Experience}/>
            <Route path="/contact" Component={Contact}/>
          </Routes>
      </Router>
    </div>
    
  );
}

export default Dashboard;
