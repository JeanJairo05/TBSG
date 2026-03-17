import React from 'react';

export default function Nosotros() {
  return (
    <main className="equipo-section">
      <div className="container">
        <h2 className="section-title animate-fade-in">Nuestro Equipo</h2>
        <p className="tagline animate-fade-in">
          Mentes creativas unidas por la pasión por el software.
        </p>

        <section className="equipo-grid">
          {/* MIEMBRO 1 */}
          <div className="miembro animate-bounce-down delay-equipo-1">
            <img src="/img/Lucho.png" alt="Luis" />
            <h3>Luis</h3>
            <p>Socio Fundador</p>
          </div>

          {/* MIEMBRO 2 */}
          <div className="miembro animate-bounce-down delay-equipo-2">
            <img src="/img/Paco.png" alt="Francisco" />
            <h3>Francisco</h3>
            <p>Socio Fundador</p>
          </div>

          {/* MIEMBRO 3 */}
          <div className="miembro animate-bounce-down delay-equipo-3">
            <img src="/img/Jairo.png" alt="Jairo" />
            <h3>Jairo</h3>
            <p>Lead Developer</p>
          </div>

          {/* MIEMBRO 4 */}
          <div className="miembro animate-bounce-down delay-equipo-4">
            <img src="/img/Otto.png" alt="Octavio" />
            <h3>Octavio</h3>
            <p>UX/UI Designer</p>
          </div>
        </section>
      </div>
    </main>
  );
}