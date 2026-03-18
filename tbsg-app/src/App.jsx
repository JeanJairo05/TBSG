import React, { useState, useEffect } from 'react'; // Añadimos esto
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Proyectos from './pages/Proyectos';
import './App.css';

function App() {
  // Lógica para el efecto Glass
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Añadimos la clase dinámica aquí */}
      <header className={scrolled ? 'scrolled' : ''}>
        <div className="nav-container">
          <Link to="/">
            <img src="/img/logo.png" alt="Bear Logo" className="logo" />
          </Link>
          <nav>
            <ul className="nav-links">
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/nosotros">Sobre Nosotros</Link></li>
              <li><Link to="/proyectos">Proyectos</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/proyectos" element={<Proyectos />} />
      </Routes>
    </>
  );
}

export default App;