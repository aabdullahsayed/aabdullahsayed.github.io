import React from "react";
import Terminal from "./Terminal";

const HERO_TAGS = ["Bioinformatics", "Automotive Software", "Backend Engineering", "Clean Code"];

export default function Hero() {
  return (
    <section id="about" className="hero">
      <div className="grid-overlay">
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i}></span>
        ))}
      </div>

      <div className="hero-grid">
        <div>
          <div className="status-line">
            <span className="dot"></span> Available for backend, bioinformatics &amp; automotive
            software roles
          </div>

          <h1 className="glitch" data-text="ABDULLAH AL SAYED">
            <span>ABDULLAH AL SAYED</span>
          </h1>

          <p className="lede">
            Backend software engineer and CS undergrad in Dhaka, focused on bioinformatics,
            automotive software, and backend engineering — writing clean, production-grade code,
            not shortcuts.
          </p>

          <div className="hero-tags">
            {HERO_TAGS.map((tag) => (
              <span className="hero-tag" key={tag}>{tag}</span>
            ))}
          </div>
        </div>

        <Terminal />
      </div>
    </section>
  );
}
