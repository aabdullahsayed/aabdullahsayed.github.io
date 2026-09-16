import React, { useState } from "react";

const NAV_ITEMS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Header({ activeSection }) {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => setOpen(false);

  return (
    <header className="topnav">
      <div className="nav-inner">
        <a href="#top" className="logo">ABDULLAH AL SAYED</a>

        <nav className={`nav-links${open ? " open" : ""}`} id="navLinks">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={activeSection === item.href.slice(1) ? "active" : ""}
              onClick={handleLinkClick}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className="nav-toggle"
          id="navToggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
