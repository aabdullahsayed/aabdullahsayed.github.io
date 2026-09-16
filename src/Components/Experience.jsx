import React from "react";

// TEMPLATE: each entry is a placeholder experience slot.
// Replace type/role/description with real details, or add/remove entries.
const EXPERIENCE = [
  {
    type: "[Type]",
    role: "[Role — Organization]",
    description: "[One or two sentences on what you did and the impact you had.]",
  },
  {
    type: "[Type]",
    role: "[Role — Organization]",
    description: "[One or two sentences on what you did and the impact you had.]",
  },
  {
    type: "[Type]",
    role: "[Role — Organization]",
    description: "[One or two sentences on what you did and the impact you had.]",
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <div className="section-inner">
        <div className="section-rail">
          <span className="idx">04</span>
          <span className="label">Experience</span>
        </div>
        <div>
          <h2 className="section-title">Experience</h2>
          <ul className="log-list">
            {EXPERIENCE.map((item, i) => (
              <li className="log-item" key={i}>
                <span className="tag">{item.type}</span>
                <div>
                  <h3>{item.role}</h3>
                  <p>{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
