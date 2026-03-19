import { FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-left">
          <h3 className="footer-name">
            Harshit <span className="gradient-text">Negi</span>
          </h3>
          <p className="footer-tagline">
            Building scalable web applications with modern technologies.
          </p>
        </div>

        <div className="footer-right">
          <a href="mailto:harshitnegi909@gmail.com">
            <IoMdMail size={18} />
          </a>
          <a href="https://github.com/harshitnegi711" target="_blank">
            <FaGithub size={18} />
          </a>
          <a href="https://www.linkedin.com/in/harshit-negi-809107171/" target="_blank">
            <FaLinkedin size={18} />
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Harshit Negi. All rights reserved.
      </div>

    </footer>
  )
}

export default Footer
