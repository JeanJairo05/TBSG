import './App.css'

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <div className="nav-container">
            <img src="/img/logo.png" alt="Bear Logo" className="logo" />
            <ul className="nav-links">
              <li><a href="/">Inicio</a></li>
              <li><a href="/nosotros">Sobre Nosotros</a></li>
              <li><a href="/proyectos">Proyectos</a></li>
            </ul>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1>The Bear Study Group</h1>
            <p className="tagline">Innovación que trasciende. Soluciones de software a la medida de tus ambiciones.</p>
            <div className="hero-btns">
              <a href="/proyectos" className="btn-primary">Ver Portafolio</a>
              <a href="#nosotros" className="btn-secondary">Conócenos</a>
            </div>
          </div>
        </section>

        <section id="nosotros" className="identidad">
          <div className="container">
            <div className="identidad-grid">
              <div className="identidad-card">
                <img src="/img/Mision.png" alt="Nuestra Misión" className="identidad-img" />
                <h3>Nuestra Misión</h3>
                <p>Artesanos del código: Forjamos soluciones de software a medida.</p>
              </div>
              <div className="identidad-card">
                <img src="/img/Vision.png" alt="Nuestra Visión" className="identidad-img" />
                <h3>Nuestra Visión</h3>
                <p>Ser el estudio de software de referencia en Lima.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="servicios">
          <h2 className="section-title">En Qué Somos Expertos</h2>
          <div className="features-grid">
            <div className="card">
              <img src="/img/Desarrollo.png" alt="Desarrollo" className="card-img" />
              <h3>Arquitectura Web</h3>
              <p>Construimos plataformas sólidas y escalables.</p>
            </div>
            <div className="card">
              <img src="/img/Diseno.png" alt="Diseño" className="card-img" />
              <h3>Diseño UX/UI</h3>
              <p>Interfaces que enamoran y convierten.</p>
            </div>
            <div className="card">
              <img src="/img/Appios.png" alt="iOS" className="card-img" />
              <h3>Apps iOS</h3>
              <p>Experiencias móviles nativas de alta calidad.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App