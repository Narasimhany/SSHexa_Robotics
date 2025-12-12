import React from "react";
import "./CaseStudies.css";
import { Link } from "react-router-dom";
import product1 from "./EPSON.png";

const caseStudies = [
  {
    category: "MANUFACTURING",
    title: "Performance of Automated Blot-and-Plunge and Spray-Based Grid Preparation",
    description:
      "This study evaluates how automated blot-and-plunge and spray-based workflows produce consistent, high-quality cryo-EM grids across diverse specimens.",
    readTime: "12 minute read",
    image: product1,
    link: "/CS/CS1"
  },
  {
    category: "RESEARCH",
    title: "On-Grid Mixing for Rapid Protein–Protein Complex Formation",
    description:
      "A fast, low-volume mixing strategy that drives protein interactions directly on the cryo-EM grid. Ideal for trapping short-lived complexes with high structural precision.",
    readTime: "14 minute read",
    image: product1,
    link: "/CS/CS2"
  },
];

const CaseStudies = () => {
  return (
    <div className="case-page">
      
      <h1 className="case-title">Case Studies</h1>
      <p className="case-subtitle">
        Explore real-world examples of how SSHexa Robotics has helped clients improve efficiency,
        automate workflows, and accelerate scientific breakthroughs.
      </p>

      <div className="case-toolbar">
        <div className="case-filters">
          <button className="filter-btn active">ALL</button>
          <button className="filter-btn">MANUFACTURING</button>
          <button className="filter-btn">RESEARCH</button>
          <button className="filter-btn">HEALTHCARE</button>
        </div>

        <div className="case-sort">
          <select>
            <option>Sort by: Latest</option>
            <option>Sort by: Oldest</option>
          </select>
        </div>
      </div>

      <div className="case-grid">
        {caseStudies.map((study, idx) => (
          <div key={idx} className="case-card">
            <img src={study.image} alt={study.title} className="case-image" />

            <div className="case-content">
              <p className="case-category">{study.category}</p>
              <h3 className="case-heading">{study.title}</h3>
              <p className="case-description">{study.description}</p>
              <p className="case-readtime">{study.readTime}</p>

              <Link to={study.link}>
                <button className="case-readmore">Read More</button>
              </Link>
              
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default CaseStudies;
