import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Contacto from "./contacto.jsx";

function App() {
  return (
    <div>
      {/* Menú de navegación */}
      <nav className="nav">
        <Link to="/" className="nav-link">Inicio</Link> |{" "}
        <Link to="/contacto" className="nav-link">Contacto</Link>
      </nav>

      {/* Definición de rutas */}
      <Routes>
        {/* Página principal */}
        <Route
          path="/"
          element={
            <div className="container">
              <header className="header">
                <h1>Dr. Carlos Pérez</h1>
                <h2>Médico Veterinario</h2>
              </header>

              <main className="main">
                <section className="intro">
                  <p>
                    Bienvenido a mi página profesional. Soy médico veterinario
                    con experiencia en el cuidado integral de mascotas,
                    comprometido con la salud y bienestar de tus compañeros de vida.
                  </p>
                </section>

                <section className="cta">
                  <p>Agenda tu cita o contáctame para más información.</p>
                  {/* Botón que navega a Contacto */}
                  <Link to="/contacto" className="btn">Contactar</Link>
                </section>
              </main>

              <footer className="footer">
                <p>© 2026 Dr. Juan Carlos Luna | Clínica Veterinaria CDMX</p>
              </footer>
            </div>
          }
        />

        {/* Página de contacto */}
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </div>
  );
}

export default App;