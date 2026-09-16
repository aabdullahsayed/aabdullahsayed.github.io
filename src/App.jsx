import React, { useEffect, useState } from "react";
import "./styles.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

const SECTION_IDS = ["about", "skills", "work", "experience", "contact"];

export default function App() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header activeSection={activeSection} />

      <main id="top">
        <div className="wrap">
          <div className="meta-row">
            <span>PORTFOLIO — INDEX 2026</span>
            <span>DHAKA, BANGLADESH</span>
          </div>

          <Hero />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </div>
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
