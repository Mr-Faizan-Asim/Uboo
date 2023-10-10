import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar.jsx"
const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
      </Routes>
    </Router>
  )
}

export default App