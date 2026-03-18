import { FaLink } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";


const projects = [
  {
    title: "Portfolio Website",
    description:
      "A fully responsive personal portfolio website built using HTML, CSS, and JavaScript, showcasing projects, skills, and smooth UI interactions.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://test-portfolio-711.netlify.app/",
    github: "https://github.com/harshitnegi711/portfolio-1.git",
  },
  {
    title: "Product Landing Page",
    description:
      "A modern and responsive landing page designed with clean UI/UX principles using HTML, CSS, and JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://landingpage711.netlify.app/",
    github: "https://github.com/harshitnegi711/landing_page.git",
  },
  {
    title: "Music Player",
    description:
      "A web-based music player with play, pause, and track controls built using HTML, CSS, JavaScript, and jQuery.",
    tech: ["HTML", "CSS", "JavaScript", "jQuery"],
    live: "https://musicplayer711.netlify.app/",
    github: "https://github.com/harshitnegi711/Music_Player.git",
  },
  {
    title: "Netflix Landing Page Clone",
    description:
      "A responsive clone of the Netflix landing page replicating layout, styling, and UI using HTML, CSS, and JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://landingpagenetflex.netlify.app/",
    github: "https://github.com/harshitnegi711/netflix-clone.git",
  },
  {
    title: "Simon Game",
    description:
      "A classic Simon memory game built using HTML, CSS, and JavaScript with interactive sound and sequence logic.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://playsimo.netlify.app/",
    github: "https://github.com/harshitnegi711/simon-game.git",
  },
];



const ProjectsSection = () => {
  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">
        My <span className="gradient-text">Projects</span>
      </h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p className="project-desc">{project.description}</p>

            <div className="project-tech">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>

            <div className="project-links">
              <a href={project.live} target="_blank" rel="noreferrer">
                Live <FaLink />
              </a>
              <a href={project.github} target="_blank" rel="noreferrer">
                Code <FaGithub />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
