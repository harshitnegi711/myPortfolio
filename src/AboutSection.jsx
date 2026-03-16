const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-container">

        <h2 className="about-title">
          About <span className="gradient-text">Me</span>
        </h2>

        <p className="about-text">
          I'm a <span className="highlight">Full-Stack Web Developer</span> who
          designs and builds clean, scalable systems from the
          <span className="highlight"> database layer</span> to the
          <span className="highlight"> user interface</span>.
        </p>

        <p className="about-text">
          I specialize in <span className="highlight">React ecosystems</span> on
          the frontend and <span className="highlight">Node.js services</span> on
          the backend, with a strong commitment to
          <span className="highlight"> TypeScript across the entire stack</span>.
        </p>

        <p className="about-text">
          My approach is pragmatic: <span className="highlight">ship fast</span>,
          <span className="highlight"> measure everything</span>, and
          <span className="highlight"> iterate based on data</span>. I care about
          <span className="highlight"> code review culture</span>,
          <span className="highlight"> automated testing</span>, and
          documentation that outlives the sprint.
        </p>

      </div>
    </section>
  )
}

export default AboutSection
