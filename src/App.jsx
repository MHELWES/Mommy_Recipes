import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from "./Components/Navbar"
import Main from "./Pages/Main"
import Favorites from "./Pages/Favorites"

function App() {

  return (
    <>
     <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/home" element={<Main />}/>
        <Route path="/Favorites" element={<Favorites />}/>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
