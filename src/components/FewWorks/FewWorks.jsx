import React from "react";
import "./FewWorks.css";

const FewWorks = () => {
  const links = [
    "https://hibacomputerstore.com/",
    "https://hibacomputers.com/",
    "https://bluedeeb.com/",
    "https://wasalt.sa/en",
    "https://portfolio-abdul-kader-midlaj.vercel.app/",
    "https://nextsolution-liard.vercel.app/",
    "https://website-front-pi.vercel.app/",
    "https://sporttea.in/",
    "https://futurebank-rust.vercel.app/",
    "https://loyality-gamma.vercel.app/",
    "https://proptech-tawny.vercel.app/"
  ];

  return (
    <section id="few-works" className="few-works">
      <h2 className="section-title">Few Works</h2>
      <div className="links-grid">
        {links.map((url, index) => (
          <a
            key={index}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="work-link"
          >
            {url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
          </a>
        ))}
      </div>
    </section>
  );
};

export default FewWorks;
