import "./App.css";
import { FaWhatsapp, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";



function App() {
  return (
    <div className="app">



      <header className="hero">

      </header>


      <main className="main-content">
        <section className="about">
          <h2>Sobre Mí</h2>

          <p>
            Soy <strong>Juan Carlos Luna García</strong>,
            <strong>Médico Veterinario Zootecnista</strong> egresado de la
            <strong>Universidad Nacional Autónoma de México (UNAM)</strong>.
            Desde mis primeros años de formación he estado convencido de que la
            medicina veterinaria es más que una profesión: es una vocación de servicio
            hacia el bienestar de nuestros compañeros animales y la tranquilidad de sus familias.
          </p>

          <p>
            A lo largo de mi trayectoria he trabajado en hospitales de especialidad y
            clínicas de la <strong>CDMX</strong>, atendiendo desde consultas generales
            hasta casos complejos en áreas como <strong>dermatología</strong>,
            <strong>neurología</strong> y <strong>medicina interna</strong>.
            Mi experiencia incluye guardias, emergencias y seguimiento de pacientes hospitalizados,
            siempre con ética, profesionalismo y empatía.
          </p>

          <p>
            Me mantengo en constante <strong>actualización académica</strong>, participando en
            diplomados, simposios y certificaciones que me permiten ofrecer diagnósticos más precisos
            y tratamientos modernos. Creo firmemente que la combinación de conocimiento técnico y
            sensibilidad hacia cada paciente es la clave para brindar una atención de calidad.
          </p>

          <p>
            Mi compromiso es acompañar a cada mascota en su camino hacia la salud, con dedicación y respeto,
            porque sé que detrás de cada paciente hay una familia que confía en mí.
          </p>



        </section>

        <section className="services">
          <h2>Servicios</h2>
          <div className="services-grid">
            <div className="service">
              <h3>Consultas Generales</h3>
              <p>Revisiones completas y diagnósticos precisos.</p>
            </div>
            <div className="service">
              <h3>Vacunación</h3>
              <p>Programas de vacunación para prevenir enfermedades.</p>
            </div>
            <div className="service">
              <h3>Cirugías</h3>
              <p>Procedimientos quirúrgicos con tecnología avanzada.</p>
            </div>
            <div className="service">
              <h3>Urgencias</h3>
              <p>Atención 24/7 para emergencias veterinarias.</p>
            </div>
          </div>
        </section>
        <section className="service">
          <h2>Contacto</h2>
          <p>Agenda tu cita o contáctame para más información.</p>
          <br />
          <div className="contact-buttons">
            <a
              href="https://wa.me/5215585625282"
              target="_blank"
              rel="noopener noreferrer"
              className="btn whatsapp"
            >
              <FaWhatsapp /> WhatsApp
            </a>
            <a
              href="https://www.linkedin.com/in/tuusuario"
              target="_blank"
              rel="noopener noreferrer"
              className="btn linkedin"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a
              href="mailto:info@veterinarioluna.com"
              className="btn email"
            >
              <FaEnvelope /> Email
            </a>
            <a
              href="https://www.instagram.com/tuusuario"
              target="_blank"
              rel="noopener noreferrer"
              className="btn instagram"
            >
              <FaInstagram /> Instagram
            </a>
          </div>
        </section>









      </main>

      <footer className="footer">
        <p>&copy; 2026 Dr. Juan Carlos Luna. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;