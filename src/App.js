import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Pages/Home/Navbar';
import Home from './Pages/Home/Homescreen';


function App() {
  return (
      <div className='App'>
        <Router>
          <div>
            <NavBar />
            <Routes>       
              {/* Aqui adiciona mais paginas          */}
              <Route path='/' element={<Home />}></Route>
              {/* Usado quando usuário digital qualquer coisa. Se não foi algum caminho especificado, retornada 404 Not found */}
              <Route path='*' element={<div>404 Not Found</div>}></Route>
            </Routes>                    
          </div>
        </Router>
      </div>
  );
}


export default App;