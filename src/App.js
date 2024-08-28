import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <div>
        <nav className="bg-gray-800 p-4">
          <div className="flex justify-between items-center">
            <div className="text-white text-xl font-bold">
              <Link to="/">Pierre Créations</Link>
            </div>
            <div className="block lg:hidden">
              <button onClick={toggleMenu} className="text-white focus:outline-none">
                {/* Hamburger Icon */}
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              </button>
            </div>
            <div className={`w-full lg:flex lg:items-center lg:w-auto ${isOpen ? '' : 'hidden'}`}>
              <ul className="lg:flex lg:justify-around text-white">
                <li className="p-2"><Link to="/">Accueil</Link></li>
                <li className="p-2"><Link to="/portfolio">Portfolio</Link></li>
                <li className="p-2"><Link to="/about">À propos</Link></li>
                <li className="p-2"><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
