import React, { useState } from "react";
import "./Vitriflex.css";
import { Link } from "react-router-dom";

import img1 from "../EPSON.png";   // Main VitriFlex image


const images = [img1];

const Vitriflex = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="vitriflex-container">

      <Link to="/products" className="back-button">← Back</Link>

      <div className="vitriflex-box">

        {/* ==== LEFT: IMAGE VIEWER ==== */}
        <div className="vitriflex-image-viewer">

          <button className="nav-arrow left" onClick={prevImage}>❮</button>

          <img
            src={images[currentIndex]}
            alt="VitriFlex Robot"
            className="vitriflex-main-image"
          />

          <button className="nav-arrow right" onClick={nextImage}>❯</button>

          {/* Thumbnail carousel */}
          <div className="vitriflex-thumbnails">
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`VitriFlex ${idx}`}
                className={`thumbnail ${idx === currentIndex ? "active" : ""}`}
                onClick={() => setCurrentIndex(idx)}
              />
            ))}
          </div>
        </div>

        {/* ==== RIGHT: PRODUCT DETAILS ==== */}
        <div className="vitriflex-details">

          <h1 className="product-title">
            Product <span>Description</span>
          </h1>

          <p className="product-summary">
            VitriFlex is an open-source cryo-EM grid preparation system that combines
            precision robotics, modular design, and rapid vitrification capability.
            Engineered around an Epson SCARA robot, it supports both traditional
            blot-and-plunge workflows and advanced on-grid mixing for time-resolved studies.
          </p>

          <h2 className="section-title">Main Features</h2>

          <ul className="feature-list">
            <li>⚙️ Industrial-grade Epson T3 SCARA robot (±0.02 mm repeatability)</li>
            <li>🧊 Automated blotting & plunge freezing workflow</li>
            <li>💧 Integrated ultrasonic sprayer for low-volume sample delivery</li>
            <li>🔄 Supports time-resolved cryo-EM (~130 ms spray-to-plunge)</li>
            <li>🧱 Modular 3D-printed chamber for blotting, spraying & humidity control</li>
            <li>💻 Open-source control software with editable timing sequences</li>
            <li>🧪 Compatible with multiple grid types (UltrAuFoil, Quantifoil, gold grids)</li>
          </ul>

          <h2 className="section-title">Ideal For</h2>

          <div className="ideal-for">
            <p>• Cryo-EM Sample Preparation Labs</p>
            <p>• Time-Resolved Structural Biology</p>
            <p>• Protein–Protein Interaction Studies</p>
            <p>• University Research Facilities</p>
            <p>• Drug Discovery / Biopharma</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Vitriflex;
