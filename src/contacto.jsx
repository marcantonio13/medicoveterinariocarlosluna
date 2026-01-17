import "./Contacto.css";
import { FaEnvelope, FaInstagram, FaWhatsapp } from "react-icons/fa";

function Contacto() {
  return (
    <div className="contact-container">
      <header className="contact-header">
        <h1>Gracias por visitar mi página</h1>
        <h2>Dr. Juan Carlos Luna - Médico Veterinario</h2>
      </header>

      <main className="contact-main">
        <p>
          Agradezco tu interés en mis servicios profesionales. Estoy comprometido
          con el bienestar y cuidado integral de tus mascotas.  
          Puedes contactarme fácilmente a través de los siguientes medios:
        </p>

        <div className="contact-links">
          <a
            href="mailto:veterinario@example.com"
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope className="icon" /> Correo
          </a>

          <a
            href="https://instagram.com/tuusuario"
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="icon" /> Instagram
          </a>

          <a
            href="https://wa.me/525512345678"
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="icon" /> WhatsApp
          </a>
        </div>
      </main>

      <footer className="contact-footer">
        <p>© 2026 Dr. Juan Carlos Luna | Clínica Veterinaria CDMX</p>
      </footer>
    </div>
  );
}

export default Contacto;