import React from 'react'
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Navbar} from "./components/index.js"
import { Footer} from './container';
import Home from './Pages/Home';
import Card from './components/card/card.jsx'


const App = () => {
  return (
    <Router>
      <Navbar />
      <Card />
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    <Footer/>
    </Router>
  )
}

export default App