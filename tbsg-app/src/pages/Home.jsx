import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main>
      <section className="hero">
        <h1 className="animate-fade-in">The Bear Study Group</h1>
        <p className="tagline animate-fade-in delay-1">
          Innovación que trasciende. Soluciones de software a la medida de tus ambiciones.
        </p>
        <div className="hero-btns animate-fade-in delay-2">
          <Link to="/proyectos" className="btn-primary">Ver Portafolio</Link>
          <Link to="/nosotros" className="btn-secondary">Conócenos</Link>
        </div>
      </section>

      <section className="identidad">
        <div className="identidad-grid">
          <div className="identidad-card animate-fade-in">
            <img src="/img/Mision.png" alt="Misión" className="identidad-img" />
            <h3 style={{color: 'var(--primary)', marginBottom: '10px'}}>Nuestra Misión</h3>
            <p style={{color: 'var(--text-dim)'}}>Artesanos del código: Forjamos soluciones a medida.</p>
          </div>
          <div className="identidad-card animate-fade-in">
            <img src="/img/Vision.png" alt="Visión" className="identidad-img" />
            <h3 style={{color: 'var(--primary)', marginBottom: '10px'}}>Nuestra Visión</h3>
            <p style={{color: 'var(--text-dim)'}}>Ser el estudio de software de referencia en Lima.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;