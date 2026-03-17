export default function Nosotros() {
  return (
    <main>
      <h2 className="section-title">Nuestro Equipo</h2>
      <section className="equipo">
        <div className="miembro">
          <img src="/img/Lucho.png" alt="Luis" />
          <h3>Luis</h3>
          <p>Socio Fundador</p>
        </div>
        <div className="miembro">
          <img src="/img/Paco.png" alt="Francisco" />
          <h3>Francisco</h3>
          <h3>Socio Fundador</h3>
        </div>
        <div className="miembro">
          <img src="/img/Jairo.png" alt="Jairo" />
          <h3>Jairo</h3>
          <p>Lead Developer</p>
        </div>
        <div className="miembro">
          <img src="/img/Otto.png" alt="Octavio" />
          <h3>Octavio</h3>
          <p>UX/UI Designer</p>
        </div>
      </section>
    </main>
  );
}