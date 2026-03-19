import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">

      <div className="contact-container">

        <h2 className="contact-title">
          Let’s <span className="gradient-text">Work Together</span>
        </h2>

        <p className="contact-subtitle">
          I'm currently available for freelance and full-time opportunities.
          If you have a project or just want to connect, feel free to reach out.
        </p>

        <div className="contact-actions">
          <a href="mailto:harshitnegi909@gmail.com" className="contact-btn primary">
            <IoMdMail size={18} />
            <span>Email Me</span>
          </a>

          <a href="https://github.com/harshitnegi711" target="_blank" className="contact-btn">
            <FaGithub size={18} />
            <span>GitHub</span>
          </a>

          <a href="https://www.linkedin.com/in/harshit-negi-809107171/" target="_blank" className="contact-btn">
            <FaLinkedin size={18} />
            <span>LinkedIn</span>
          </a>
        </div>

      </div>

    </section>
  )
}

export default Contact
