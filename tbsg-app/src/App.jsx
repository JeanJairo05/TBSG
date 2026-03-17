import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Proyectos from './pages/Proyectos';
import './App.css';

function App() {
  return (
    <>
      <header>
        <nav>
          <div className="nav-container">
            <img src="/img/logo.png" alt="Bear Logo" className="logo" />
            <ul className="nav-links">
              {/* USA LINK TO EN LUGAR DE A HREF */}
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/nosotros">Sobre Nosotros</Link></li>
              <li><Link to="/proyectos">Proyectos</Link></li>
            </ul>
          </div>
        </nav>
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