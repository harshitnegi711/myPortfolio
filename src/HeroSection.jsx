
import { LuFileText } from "react-icons/lu";
import { FaArrowDown } from "react-icons/fa6";

const HeroSection = () => {

  // ----------------UI BODY --------------

  return (
    <div className="hero-section ">
      <div className="status">
        <span className="dot"></span>
        Available for work
      </div>
      <h2>
        Hi I'm <span className="name">Harshit Negi</span>
      </h2>
      <h1>
        I build <span className="gradient-text">scalable and high-performance</span>
        <br />
        web applications.
      </h1>
      <p className="subtitle">
        Full Stack Developer specializing in React, JavaScript, Node.js,
        and modern web technologies.
      </p>

      <div className="hero-buttons">
        <button className="view-my-work-btn"
          onClick={() =>
            document.getElementById("projects").scrollIntoView({ behavior: "smooth" })
          }
        >
          <span>View My Work</span>
          <FaArrowDown />
        </button>
        <button className="resume-btn">
          <span onClick={() => { window.open("../public/harshit_negi_SDE.pdf", "_blank") }}>Resume</span>
          <LuFileText />
        </button>
      </div>

    </div>
  )
}

export default HeroSection
