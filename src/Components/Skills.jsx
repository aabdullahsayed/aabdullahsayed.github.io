import React from "react";

const SKILL_CATEGORIES = [
  {
    title: "Backend & APIs",
    chips: ["ASP.NET Core", "EF Core", "REST APIs", "JWT Auth", "Clean Architecture"],
  },
  {
    title: "Bioinformatics",
    // TEMPLATE: replace with real bioinformatics tools/frameworks
    chips: [],
    placeholders: ["[Add tools]", "[Add tools]"],
  },
  {
    title: "Automotive Software",
    // TEMPLATE: replace with real automotive software tools/standards
    chips: [],
    placeholders: ["[Add tools]", "[Add tools]"],
  },
  {
    title: "Clean Code & Practices",
    chips: ["Clean Architecture", "SOLID Principles", "Unit Testing", "Code Reviews"],
  },
  {
    title: "Data & ML",
    chips: ["Python", "Scikit-Learn", "PyTorch", "ONNX", "Graph Neural Nets"],
  },
  {
    title: "Databases & Tooling",
    chips: ["PostgreSQL", "SQL", "Git", "CLI Tooling"],
  },
  {
    title: "Languages",
    chips: ["C#", "Python", "SQL", "JavaScript"],
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-inner">
        <div className="section-rail">
          <span className="idx">02</span>
          <span className="label">Skills</span>
        </div>
        <div>
          <h2 className="section-title">Capabilities</h2>
          <div className="skills-grid">
            {SKILL_CATEGORIES.map((cat) => (
              <div className="skill-cat" key={cat.title}>
                <h3>{cat.title}</h3>
                <div className="chip-row">
                  {cat.chips.map((chip) => (
                    <span className="chip" key={chip}>{chip}</span>
                  ))}
                  {cat.placeholders &&
                    cat.placeholders.map((p, i) => (
                      <span className="chip placeholder" key={i}>{p}</span>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
