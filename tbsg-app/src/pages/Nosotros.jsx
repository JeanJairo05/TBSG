import React from 'react';

export default function Nosotros() {
  return (
    <main style={{ paddingTop: '150px' }}>
      <div className="container">
        <h2 className="section-title animate-fade-in" style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '50px', color: '#ffcc00' }}>
          Nuestro Equipo
        </h2>
        
        <section className="equipo">
          
          {/* 1. LUIS (Visualmente primero, cae SEGUNDO con Otto) */}
          <div className="miembro animate-bounce-down delay-1">
            <img src="/img/Lucho.png" alt="Luis" />
            <h3>Luis</h3>
            <p>Socio Fundador</p>
          </div>
          
          {/* 2. FRANCISCO (Visualmente segundo, cae AL FINAL) */}
          <div className="miembro animate-bounce-down delay-2">
            <img src="/img/Paco.png" alt="Francisco" />
            <h3>Francisco</h3>
            <p>Socio Fundador</p>
          </div>

          {/* 3. JAIRO (Visualmente tercero, cae PRIMERO) */}
          <div className="miembro animate-bounce-down" style={{ animationDelay: '2.2s' }}>
            <img src="/img/Jairo.png" alt="Jairo" />
            <h3>Jairo</h3>
            <p>Lead Developer</p>
          </div>

          {/* 4. OTTO (Visualmente cuarto, cae SEGUNDO con Luis) */}
          <div className="miembro animate-bounce-down" style={{ animationDelay: '2.9s' }}>
            <img src="/img/Otto.png" alt="Octavio" />
            <h3>Octavio</h3>
            <p>UX/UI Designer</p>
          </div>
          
        </section>
      </div>
    </main>
  );
}