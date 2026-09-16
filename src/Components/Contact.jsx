import React, { useState } from "react";

const EMAIL = "hello@example.com";

const SOCIAL_LINKS = [
  { label: "Email", href: `mailto:${EMAIL}` },
  { label: "GitHub", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Resume / CV", href: "#" },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    });
  };

  return (
    <section id="contact">
      <div className="section-inner">
        <div className="section-rail">
          <span className="idx">05</span>
          <span className="label">Contact</span>
        </div>
        <div>
          <h2 className="section-title">Contact</h2>
          <div className="contact-grid">
            <div className="contact-cta">
              <h3>Let's build something</h3>
              <p>Open to backend engineering, bioinformatics, and automotive software roles.</p>
              <div className="copy-row">
                <span className="email-field" id="emailField">{EMAIL}</span>
                <button className="copy-btn" id="copyBtn" onClick={handleCopy}>
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>

            <ul className="social-list">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} target={link.href.startsWith("mailto") ? undefined : "_blank"} rel="noopener">
                    {link.label} <span className="arrow">&rarr;</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
