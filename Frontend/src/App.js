import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import navbar from "./components/navbar/navbar.jsx"
const App = () => {
  return (
    <Router>
      <navbar/>
      <Routes>
       
      </Routes>
    </Router>
  )
}

export default App