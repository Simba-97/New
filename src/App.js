import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import {BrowserRouter as Router} from 'react-router-dom'
import SideBar from "./Components/Navbar/Sidebar";

function App() {
  return(
    <Router>
      <SideBar />
       <Navbar/>
    </Router>
   
  )
}

export default App;
