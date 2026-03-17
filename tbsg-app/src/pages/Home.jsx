import React from 'react';

const Home = () => {
  return (
    <main>
      {/* SECCIÓN HERO - Ahora animada */}
      <section className="hero">
        <div className="hero-content animate-fade-in">
          <h1>The Bear Study Group</h1>
          <p className="tagline delay-1 animate-fade-in">
            Innovación que trasciende. Soluciones de software a la medida de tus ambiciones.
          </p>
          <div className="hero-btns delay-2 animate-fade-in">
            <a href="/proyectos" className="btn-primary">Ver Portafolio</a>
            <a href="#nosotros" className="btn-secondary">Conócenos</a>
          </div>
        </div>
      </section>

      {/* SECCIÓN IDENTIDAD - Tarjetas animadas */}
      <section id="nosotros" className="identidad">
        <div className="container">
          <div className="identidad-grid">
            <div className="identidad-card animate-fade-in delay-1">
              <img src="/img/Mision.png" alt="Nuestra Misión" className="identidad-img" />
              <h3>Nuestra Misión</h3>
              <p>Artesanos del código: Forjamos soluciones de software a medida.</p>
            </div>
            <div className="identidad-card animate-fade-in delay-2">
              <img src="/img/Vision.png" alt="Nuestra Visión" className="identidad-img" />
              <h3>Nuestra Visión</h3>
              <p>Ser el estudio de software de referencia en Lima.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN SERVICIOS - Mismo efecto para las características */}
      <section className="servicios">
        <h2 className="section-title animate-fade-in">En Qué Somos Expertos</h2>
        <div className="features-grid">
          <div className="card animate-fade-in delay-1">
            <img src="/img/Desarrollo.png" alt="Desarrollo" className="card-img" />
            <h3>Arquitectura Web</h3>
            <p>Construimos plataformas sólidas y escalables.</p>
          </div>
          <div className="card animate-fade-in delay-2">
            <img src="/img/Diseno.png" alt="Diseño" className="card-img" />
            <h3>Diseño UX/UI</h3>
            <p>Interfaces que enamoran y convierten.</p>
          </div>
          <div className="card animate-fade-in delay-3">
            <img src="/img/Appios.png" alt="iOS" className="card-img" />
            <h3>Apps iOS</h3>
            <p>Experiencias móviles nativas de alta calidad.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;