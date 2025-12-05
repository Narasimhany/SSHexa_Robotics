import React from "react";
import "./CaseStudies.css";

const caseStudies = [
  {
    category: "MANUFACTURING",
    title: "Improving Production Efficiency Using SSHexa Automation",
    description:
      "A mid-sized manufacturing company implemented SSHexa robotics to reduce process cycle time and improve quality consistency across all production lines.",
    readTime: "5 minute read",
    image: "/case1.png",
  },
  {
    category: "RESEARCH",
    title: "Cryo-EM Data Processing Accelerated by Cloud Automation",
    description:
      "A research lab scaled their Cryo-EM pipeline using SSHexa’s cloud automation system, drastically reducing computation time and improving data accuracy.",
    readTime: "7 minute read",
    image: "/case2.png",
  },
];

const CaseStudies = () => {
  return (
    <div className="case-page">
      
      {/* Heading */}
      <h1 className="case-title">Case Studies</h1>
      <p className="case-subtitle">
        Explore real-world examples of how SSHexa Robotics has helped clients improve efficiency,
        automate workflows, and accelerate scientific breakthroughs.
      </p>

      {/* Filters + Sorting */}
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

      {/* Case Study Cards */}
      <div className="case-grid">
        {caseStudies.map((study, idx) => (
          <div key={idx} className="case-card">
            <img src={study.image} alt={study.title} className="case-image" />

            <div className="case-content">
              <p className="case-category">{study.category}</p>
              <h3 className="case-heading">{study.title}</h3>
              <p className="case-description">{study.description}</p>
              <p className="case-readtime">{study.readTime}</p>

              <button className="case-readmore">Read More</button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default CaseStudies;
