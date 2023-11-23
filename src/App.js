import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ProjectsPage from './Pages/ProjectsPage';
import Home from './Pages/Home';
// import NoPage from './Pages/NoPage';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          {/* <Route index element={<Home />} /> */}
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<ProjectsPage />} />
          {/* <Route path='*' element={<NoPage />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;