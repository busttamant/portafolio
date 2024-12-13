import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from './Components/NavBar';
import { Home } from './Pages/Home';
import { ProjectsPage } from './Pages/Projects';
import { Tools } from './Pages/Tools';
import { ContactPage } from './Pages/Contact';
import "./App.css"

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path='/tools' element={<Tools />} />
        <Route path='/contact' element={<ContactPage />} />




      </Routes>


    </>
  )
}

export default App