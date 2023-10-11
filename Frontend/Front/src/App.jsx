import React from 'react'
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Navbar, SubHeading} from "./components/index.js"
import { Footer, Header } from './container';
import Home from './Pages/Home';


const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    <Footer/>
    </Router>
  )
}

export default App