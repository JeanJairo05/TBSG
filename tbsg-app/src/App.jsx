import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Proyectos from './pages/Proyectos';
import './App.css';

function App() {
  return (
    <>
      <header>
        {/* EL CONTENEDOR PRINCIPAL VA DIRECTO EN EL HEADER */}
        <div className="nav-container">
          
          {/* LOGO A LA IZQUIERDA (Le puse Link para que al darle clic vuelva al inicio) */}
          <Link to="/">
            <img src="/img/logo.png" alt="Bear Logo" className="logo" />
          </Link>
          
          {/* EL NAV ENVUELVE SOLO A LOS LINKS PARA QUE SE VAYAN A LA DERECHA */}
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