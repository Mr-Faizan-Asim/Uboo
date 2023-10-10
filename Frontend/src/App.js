import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar.jsx"
import Home from './pages/Home.jsx';
import Footer from './components/footer/footer.jsx';
const App = () => {
  return (
    <Router>
      <Footer/>
      <Routes>
      
      </Routes>
    </Router>
  )
}

export default App