import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './Dashboard.css';
import './Screens/NavBar/NavBar.css'
import NavBar from "./Screens/NavBar/NavBar";
import Home from "./Screens/Home/Home";
import Experience from "./Screens/Experience/Experience";
import Contact from "./Screens/Contact/Contact";
import About from "./Screens/About/About";
// import DarkMode from "./Screens/DarkMode/DarkMode";


function Dashboard() {
  return (
    <div className="Dashboard">
      <NavBar/>
      {/* <DarkMode/> */}
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
