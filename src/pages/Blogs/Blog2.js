import React from "react";
import product2 from "../background.png";
import "./BlogDetail.css";
import videoFile from "./EPSON.mp4";


const Blog2 = () => {
  return (
    <div className="blog-detail">
      <h1>Designing a Flexible Robotic Platform for Cryo-EM Sample Preparation</h1>

      <img src={product2} alt="Cryo-EM Robot" className="blog-detail-image" />

      {/* Embedded Video */}
      

      <p>
        Cryo-EM sample preparation remains one of the most challenging steps in the
        workflow—often requiring expensive, proprietary systems that limit customization
        and innovation. Our goal was to design a robotic platform that is affordable,
        easy to assemble, and flexible enough for the community to extend.
      </p>

      <h2>What We Developed</h2>

      <h3>1. SCARA Robotic Arm for Precision Grid Handling</h3>
      <p>
        We adopted a commercial SCARA robotic arm due to its reliability, excellent
        precision, and affordability. This robot provides repeatable grid handling and
        delicate motion control, making it ideal for cryo-EM sample workflows.
      </p>
      <video controls className="blog-detail-video">
  <source src={videoFile} type="video/mp4" />
  Your browser does not support the video tag.
</video>

      <h3>2. Open-Source Robotic Software Framework</h3>
      <p>
        We built a modular, open-source framework that enables researchers to customize,
        automate, and share protocols with ease. The system supports plug-and-play
        components and allows rapid adaptation of new methods.
      </p>

      <h3>3. Modular, Plug-and-Play Hardware Platform</h3>
      <p>
        The entire platform can be assembled in just a few hours once components are
        sourced. Its modular design allows easy integration of new sensors, freezing
        units, humidity controls, and other experimental hardware.
      </p>

      <h3>4. Time-Resolved Robotic Experiments (~150 ms Precision)</h3>
      <p>
        The robotic system supports advanced time-resolved experiments, offering
        high-precision timing and the ability to freeze thin samples suitable for FIB-SEM
        workflows. This enables cutting-edge research at a fraction of traditional cost.
      </p>

      <h2>Our Vision</h2>
      <p>
        Our mission is to drastically lower the barrier to building high-performance,
        customizable cryo-EM freezing systems. By leveraging widely accessible robotics
        and open-source tools, we aim to empower labs worldwide to innovate, collaborate,
        and push the boundaries of structural biology.
      </p>
    </div>
  );
};

export default Blog2;
