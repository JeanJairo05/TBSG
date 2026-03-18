import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const wrapperRef = useRef(null); // Referencia para saber dónde estamos scrolleando

  const servicios = [
    {
      titulo: "Desarrollo Web",
      desc: "Creamos plataformas web escalables, rápidas y con arquitecturas modernas orientadas a la conversión.",
      icono: "💻"
    },
    {
      titulo: "Apps Móviles",
      desc: "Diseño y desarrollo de aplicaciones nativas e híbridas con experiencias de usuario intuitivas.",
      icono: "📱"
    },
    {
      titulo: "Consultoría Cloud",
      desc: "Migración y gestión de infraestructura en la nube para que tu negocio nunca se detenga.",
      icono: "☁️"
    }
  ];

  // Este efecto detecta el scroll del mouse y gira la rueda
  useEffect(() => {
    const handleScroll = () => {
      if (!wrapperRef.current) return;
      const rect = wrapperRef.current.getBoundingClientRect();
      const scrollDistance = -rect.top;
      const scrollHeight = rect.height - window.innerHeight;

      // Si estamos dentro de la sección de servicios
      if (scrollDistance >= 0 && scrollDistance <= scrollHeight) {
        const progress = scrollDistance / scrollHeight;
        // Calculamos qué índice debe estar activo basado en el porcentaje de scroll
        const newIndex = Math.round(progress * 2);
        setActiveIndex(newIndex);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Función para que al darle clic a los puntitos, la pantalla scrollee sola
  const handleDotClick = (index) => {
    if (!wrapperRef.current) return;
    const rect = wrapperRef.current.getBoundingClientRect();
    const targetY = window.scrollY + rect.top + (index * window.innerHeight);
    window.scrollTo({ top: targetY, behavior: 'smooth' });
  };

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

      {/* ====================================================
          VERSIÓN DESKTOP: SCROLL STICKY Y RUEDA
          ==================================================== */}
      <section ref={wrapperRef} className="servicios-wrapper desktop-only">
        <div className="servicios-sticky">
          <div className="container" style={{ position: 'relative', display: 'flex', alignItems: 'center', width: '100%' }}>
            <div className="servicios-text">
              <h2 style={{ fontSize: '1.5rem', color: 'var(--text-light)', marginBottom: '5px' }}>Nuestra</h2>
              <h2 style={{ fontSize: '1.5rem', color: 'var(--text-light)', marginBottom: '40px' }}>Expertise</h2>
              
              <div className="servicio-activo" key={activeIndex}>
                <h3 style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: '20px' }}>
                  {servicios[activeIndex].titulo}
                </h3>
                <p style={{ fontSize: '1.2rem', color: 'var(--text-dim)', maxWidth: '500px', lineHeight: '1.6' }}>
                  {servicios[activeIndex].desc}
                </p>
              </div>

              <div style={{ display: 'flex', gap: '10px', marginTop: '40px' }}>
                {servicios.map((_, index) => (
                  <div key={index} onClick={() => handleDotClick(index)}
                    style={{
                      width: '12px', height: '12px', borderRadius: '50%', cursor: 'pointer',
                      backgroundColor: activeIndex === index ? 'var(--primary)' : 'rgba(255,255,255,0.2)',
                      transition: 'all 0.3s ease'
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="servicios-visual">
              <div className="wheel-circle" style={{ transform: `rotate(${activeIndex * -45}deg)` }}>
                {servicios.map((srv, index) => {
                  const angle = 180 + (index * 45); 
                  const counterRotation = -((activeIndex * -45) + angle);
                  return (
                    <div key={index} className={`orb ${activeIndex === index ? 'orb-active' : ''}`}
                      style={{ transform: `rotate(${angle}deg) translate(350px) rotate(${counterRotation}deg)` }}>
                      {srv.icono}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================
          VERSIÓN MÓVIL: TARJETAS LIMPIAS (Mejor UX en celular)
          ==================================================== */}
      <section className="servicios-mobile mobile-only">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '1.2rem', color: 'var(--text-light)' }}>Nuestra</h2>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--primary)' }}>Expertise</h2>
          </div>
          
          <div className="servicios-grid-mobile">
            {servicios.map((srv, index) => (
              <div key={index} className="servicio-card-mobile">
                <div className="icon-mobile">{srv.icono}</div>
                <h3>{srv.titulo}</h3>
                <p>{srv.desc}</p>
              </div>
            ))}
          </div>
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