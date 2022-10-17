import React from "react"
import "./App.css"
import MapChart from "./components/map"

import Login from "./components/login/Login"
import List from "./components/list/List"

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className="App">
      {/* <MapChart /> */}
      {/* sign in */}
      {/* card */}
      {/* inputfield */}
      {/* add icon */}
      {/* remove icon */}      
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/list" element={<List />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
