
import './App.css';
import React from "react";
import Project from './pages/ProjectWood';
import Home from './pages/Home';

import Contact from './pages/Contact';

import About from './pages/About'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Projects' element={<Project />} />
          <Route path='/Contact' element={<Contact />} />

        </Routes>
      </BrowserRouter>

    </>

  );
}

export default App;
