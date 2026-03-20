const WorkExperience = () => {
  return (
    <section className="experience-section">
      <h2 className="experience-title">Work <span className="gradient-text">Experience</span> </h2>

      <div className="experience-grid">
        <div className="experience-card">
          <div className="experience-header">
            <h3>Akitra</h3>
            <span className="experience-duration">
              April 2023 - Present
            </span>
          </div>

          <p className="experience-role">
            Software Engineer (Remote)
          </p>

          <ul className="experience-points">
            <li>
              Designed and developed scalable web applications using React.js
              within a micro-frontend architecture.
            </li>
            <li>
              Built reusable, modular UI components following enterprise
              standards.
            </li>
            <li>
              Managed global state using Redux for complex workflows.
            </li>
            <li>
              Integrated RESTful APIs ensuring secure and efficient data flow.
            </li>
            <li>
              Optimized performance using lazy loading, memoization, and code
              splitting.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
