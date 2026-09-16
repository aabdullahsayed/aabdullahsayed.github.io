import React from "react";

// TEMPLATE: each entry is a placeholder project slot.
// Replace category/name/description/tech with real project details,
// or add/remove objects from this array to add/remove project cards.
const PROJECTS = [
  {
    category: "[CATEGORY]",
    name: "[Project Name]",
    description: "[One or two sentences describing what this project does and the problem it solves.]",
    tech: ["[Tech]", "[Tech]", "[Tech]"],
  },
  {
    category: "[CATEGORY]",
    name: "[Project Name]",
    description: "[One or two sentences describing what this project does and the problem it solves.]",
    tech: ["[Tech]", "[Tech]", "[Tech]"],
  },
  {
    category: "[CATEGORY]",
    name: "[Project Name]",
    description: "[One or two sentences describing what this project does and the problem it solves.]",
    tech: ["[Tech]", "[Tech]", "[Tech]"],
  },
  {
    category: "[CATEGORY]",
    name: "[Project Name]",
    description: "[One or two sentences describing what this project does and the problem it solves.]",
    tech: ["[Tech]", "[Tech]", "[Tech]"],
  },
];

function ProjectCard({ category, name, description, tech }) {
  return (
    <div className="project-card">
      <span className="project-tag">{category}</span>
      <h3>{name}</h3>
      <p>{description}</p>
      <div className="tech-stack">
        {tech.map((t, i) => (
          <span className="tech" key={i}>{t}</span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="work">
      <div className="section-inner">
        <div className="section-rail">
          <span className="idx">03</span>
          <span className="label">Work</span>
        </div>
        <div>
          <h2 className="section-title">Selected Work</h2>
          <div className="project-grid">
            {PROJECTS.map((project, i) => (
              <ProjectCard key={i} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
