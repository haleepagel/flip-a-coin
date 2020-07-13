import React from "react";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      Made with ❤️ by:{" "}
      <a
        href="https://twitter.com/HaleePagel"
        className="hyperlink"
        target="_blank"
        rel="noopener noreferrer"
      >
        Halee
      </a>
      <br />
      <a
        href="https://github.com/haleepagel/flip-a-coin"
        className="hyperlink"
        target="_blank"
      >
        Check out the code!
      </a>
    </div>
  );
}
