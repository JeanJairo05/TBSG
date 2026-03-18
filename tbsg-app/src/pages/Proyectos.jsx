import React from 'react';

const Proyectos = () => {
  return (
    <main className="proyectos-page">
      <div className="container">
        
        {/* CABECERA: La clave está en estas clases */}
        <div className="proyectos-header-container">
          <h2 className="section-title">Nuestros <span>Proyectos</span></h2>
          <p className="tagline-proyectos">Explora las soluciones que estamos construyendo.</p>
        </div>

        <section className="proyectos-grid">
          
          <div className="proyecto-card spotlight">
            <div className="proyecto-badge">En Desarrollo iOS</div>
            <div className="proyecto-content">
              <div className="proyecto-info">
                <h3>MeepleBox</h3>
                <p>
                  <strong>Tu ludoteca personal.</strong> Gestiona tu inventario de juegos de mesa, 
                  registra partidas y controla los préstamos a tus amigos.
                </p>
                <div className="tech-stack">
                  <span>SwiftUI</span>
                  <span>Swift</span>
                  <span>CoreData</span>
                </div>
              </div>
              <div className="proyecto-visual">
                <div className="mockup-placeholder">
                   <span style={{fontSize: '4rem'}}>🎲</span>
                </div>
              </div>
            </div>
          </div>

          <div className="proyecto-card empty">
            <span className="plus-icon">+</span>
            <h3>Próximamente nuevos proyectos</h3>
            <p>El equipo de The Bear Study Group sigue innovando.</p>
          </div>

        </section>
      </div>
    </main>
  );
};

export default Proyectos;