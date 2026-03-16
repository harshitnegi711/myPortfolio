import { FaReact, FaNodeJs, FaGit, FaNpm } from "react-icons/fa"
import { IoLogoCss3 } from "react-icons/io";
import { DiVim } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiTailwindcss,
  SiExpress,
  SiPostgresql,
  SiPostman,
  SiMongodb
} from "react-icons/si"

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React.js", icon: FaReact },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: IoLogoCss3 },
      { name: "Tailwind CSS", icon: SiTailwindcss }
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "REST APIs", icon: SiPostman },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb }
    ]
  },
  {
    category: "Workflow",
    items: [
      { name: "Git", icon: FaGit },
      { name: "Postman", icon: SiPostman },
      { name: "VS Code", icon: VscVscode },
      { name: "npm", icon: FaNpm },
      { name: "Vim", icon: DiVim }
    ]
  }
]

const SkillsSection = () => {
  return (
    <section id="skill" className="skills-section">

      <h2 className="skills-title">
        Technical <span className="gradient-text">Stack</span>
      </h2>

      <div className="skills-grid">

        {skills.map((group, index) => (
          <div className="skill-card" key={index}>

            <h3>{group.category}</h3>

            <div className="skills-list">

              {group.items.map((skill, i) => {
                const Icon = skill.icon

                return (
                  <div className="skill-badge" key={i}>
                    <Icon />
                    <span>{skill.name}</span>
                  </div>
                )
              })}

            </div>

          </div>
        ))}

      </div>

    </section>
  )
}

export default SkillsSection
