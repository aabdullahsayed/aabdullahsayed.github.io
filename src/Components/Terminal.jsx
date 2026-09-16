import React, { useEffect, useRef, useState } from "react";

const LINES = [
  { p: "whoami", o: "Abdullah Al Sayed — Backend Software Engineer" },
  { p: "location", o: "Dhaka, Bangladesh" },
  { p: "focus", o: "Bioinformatics / Automotive Software / Backend" },
  { p: "principle", o: "Clean code, always" },
  { p: "status", o: "Open to backend, bioinformatics & automotive roles" },
];

export default function Terminal() {
  const [renderedLines, setRenderedLines] = useState([]);
  const [typingText, setTypingText] = useState("");
  const [typingIndex, setTypingIndex] = useState(0);
  const [done, setDone] = useState(false);
  const reduceMotion = useRef(
    typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ).current;

  useEffect(() => {
    if (reduceMotion) {
      setRenderedLines(LINES.map((l) => l.o));
      setDone(true);
      return;
    }

    let cancelled = false;

    function typeLine(lineIdx, charIdx) {
      if (cancelled) return;
      if (lineIdx >= LINES.length) {
        setDone(true);
        return;
      }
      const text = LINES[lineIdx].o;
      if (charIdx <= text.length) {
        setTypingIndex(lineIdx);
        setTypingText(text.slice(0, charIdx));
        setTimeout(() => typeLine(lineIdx, charIdx + 1), 18);
      } else {
        setRenderedLines((prev) => [...prev, text]);
        setTypingText("");
        setTimeout(() => typeLine(lineIdx + 1, 0), 220);
      }
    }

    const start = setTimeout(() => typeLine(0, 0), 200);
    return () => {
      cancelled = true;
      clearTimeout(start);
    };
  }, [reduceMotion]);

  return (
    <div className="terminal">
      <div className="term-bar">
        <i></i>
        <i></i>
        <i></i>
        <span>whoami.sh</span>
      </div>
      <div className="term-body" id="termBody">
        {renderedLines.map((out, idx) => (
          <div className="term-line" key={idx}>
            <span className="prompt">$ {LINES[idx].p}</span>
            <br />
            <span className="out">{out}</span>
          </div>
        ))}

        {!done && typingIndex < LINES.length && (
          <div className="term-line">
            <span className="prompt">$ {LINES[typingIndex].p}</span>
            <br />
            <span className="out">{typingText}</span>
          </div>
        )}

        {done && (
          <span className="cursor">&nbsp;</span>
        )}
      </div>
    </div>
  );
}
