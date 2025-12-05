import React from "react";
import "./Services.css";
import backgroundImage from "./background.png";

// React Icons
import { FaRegFileAlt, FaRegCheckCircle } from "react-icons/fa";

import { FiSend } from "react-icons/fi";

const services = [
  {
    type: "text",
    title: "Programming And Integration",
    description:
      "Our Cryo-EM Cloud Application is designed to meet the evolving demands of structural biology research. Built on a highly scalable infrastructure, it offers dynamic resource allocation that adjusts effortlessly to your project’s complexity.",
  },
  {
    type: "image",
    image: "/modelling.jpg",
  },
  {
    type: "image",
    image: "/screening.png",
  },
  {
    type: "text-dark",
    title: "Care Service contract",
    description:
      "We provide extended uptime guarantees, priority pipeline execution, and reliability services to ensure your Cryo-EM workloads never face interruptions.",
  },
  
  {
    type: "text",
    title: "Custom Automation Solution",
    description:
      "Whether you need preprocessing automation, motion correction workflows, or full pipeline orchestration, our solutions are fast, scalable, and cost-efficient.",
  },
  {
    type: "image",
    image: "/analysis.jpg",
  },
  
];

const Services = () => {
  return (
    <div className="services-page">
      {/* HERO */}
      <div
        className="services-hero"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="overlay">
          <h1 className="hero-title">
            SSHexa Services And <span>Solutions</span>
          </h1>
        </div>
      </div>

      {/* SERVICE GRID */}
      <div className="service-grid">
        {services.map((item, idx) => (
          <div
            key={idx}
            className={
              item.type === "image"
                ? "service-tile image-tile"
                : item.type === "text-dark"
                ? "service-tile text-dark-tile"
                : "service-tile text-tile"
            }
          >
            {item.type === "image" ? (
              <img src={item.image} alt="" className="service-img" />
            ) : (
              <div className="service-text-box">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* HOW IT WORKS SECTION */}
      <div className="how-it-works">
        <h2 className="hiw-title">
          How Does It <span>Work</span>
        </h2>

        {/* Step 1 */}
        <div className="hiw-block">
          <div className="hiw-icon">
            <FaRegFileAlt size={60} color="#1C6DD0" />
          </div>
          <div className="hiw-text">
            <h3>Step 1 – Plan</h3>
            <p>
              We begin by understanding your Cryo-EM workflow requirements and
              designing the right compute + storage architecture for your needs.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="hiw-block">
          <div className="hiw-text">
            <h3>Step 2 – Prototyping</h3>
            <p>
              We build a custom Cryo-EM proof-of-concept pipeline, including
              motion correction, CTF estimation, and initial 2D classification.
            </p>
          </div>
          <div className="hiw-icon">
            <FiSend size={70} color="#FFD700" />
          </div>
        </div>

        {/* Step 3 */}
        <div className="hiw-block">
          <div className="hiw-icon">
            <FaRegCheckCircle size={65} color="#1C6DD0" />
          </div>
          <div className="hiw-text">
            <h3>Step 3 – Validation</h3>
            <p>
              We validate performance, accuracy, reproducibility, and
              scalability across real Cryo-EM datasets to ensure reliability.
            </p>
          </div>
        </div>

        {/* Step 4 */}
        <div className="hiw-block">
          <div className="hiw-text">
            <h3>Step 4 – Deployment</h3>
            <p>
              Your Cryo-EM environment is deployed with automation, monitoring,
              access controls, and a full support guarantee.
            </p>
          </div>
          <div className="hiw-icon">
            <FiSend size={65} color="#FFD700" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
