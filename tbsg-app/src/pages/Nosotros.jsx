import React from 'react';

export default function Nosotros() {
  return (
    <main style={{paddingTop: '150px'}}>
      <div className="container">
        <h2 className="section-title animate-fade-in" style={{textAlign: 'center', fontSize: '3rem', marginBottom: '50px', color: '#ffcc00'}}>
          Nuestro Equipo
        </h2>
        <section className="equipo">
          {/* LUCHO */}
          <div className="miembro animate-bounce-down delay-1">
            <img src="/img/Lucho.png" alt="Luis" />
            <h3>Luis</h3>
            <p>Socio Fundador</p>
          </div>
          
          {/* PACO */}
          <div className="miembro animate-bounce-down delay-2">
            <img src="/img/Paco.png" alt="Francisco" />
            <h3>Francisco</h3>
            <p>Socio Fundador</p>
          </div>

          {/* JAIRO */}
          <div className="miembro animate-bounce-down delay-3">
            <img src="/img/Jairo.png" alt="Jairo" />
            <h3>Jairo</h3>
            <p>Lead Developer</p>
          </div>

          {/* OTTO - ¡Añadido! */}
          <div className="miembro animate-bounce-down" style={{animationDelay: '0.8s'}}>
            <img src="/img/Otto.png" alt="Octavio" />
            <h3>Octavio</h3>
            <p>UX/UI Designer</p>
          </div>
        </section>
      </div>
    </main>
  );
}