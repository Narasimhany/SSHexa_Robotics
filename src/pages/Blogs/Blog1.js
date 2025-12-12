import React from "react";
import heroImage from "../EPSON.png";
import "./BlogDetail.css";
import { FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";

const Blog1 = () => {
  return (
    <div className="blog-wrapper">
      {/* ====== HERO SECTION ====== */}
      <div className="blog-hero">
        <div className="hero-left">
          <p className="blog-category">BLOGS</p>
          <h1>Introducing VitriFlex: A Modular, Affordable Cryo-EM Grid Freezing Platform</h1>

          <div className="blog-meta">
            <div className="author">
              <div className="author-icon">👤</div>
              <p>MAY 10, 2024 • 12 MINS</p>
            </div>

            <div className="share">
              <span>SHARE</span>
              <FaTwitter />
              <FaLinkedin />
              <FaFacebook />
            </div>
          </div>
        </div>

        <div className="hero-right">
          <img src={heroImage} alt="VitriFlex" />
        </div>
      </div>

      {/* ====== CONTENT BELOW HERO ====== */}
      <div className="blog-content-section">

        {/* SIDEBAR */}
        <aside className="blog-sidebar">
          <h3>In This Article</h3>
          <ul>
            <li>Why We Built VitriFlex</li>
            <li>A Modular System for Innovation</li>
            <li>Flexible Sample Delivery</li>
            <li>Time-Resolved Cryo-EM</li>
            <li>High-Resolution Results</li>
            <li>Conclusion</li>
          </ul>
        </aside>

        {/* MAIN CONTENT */}
        <div className="blog-content">
          <p>
            Cryo-electron microscopy (cryo-EM) has transformed our ability to visualize biological
            molecules in exquisite detail. But despite remarkable advances in microscopes,
            detectors, and software, specimen preparation remains the most difficult and
            least automated part of the workflow.
          </p>

          <p>
            Generating thin, consistent vitreous ice without damaging samples is challenging.
            Researchers have had to choose between expensive commercial systems with limited
            flexibility or DIY devices that lack reproducibility.
          </p>

          <p><strong>VitriFlex was created to change that.</strong></p>

          <h2>Why We Built VitriFlex</h2>

          <p>
            Traditional plunge-freezing devices fall into two extremes: manual systems requiring
            skill and experience, or fully automated commercial systems that are costly and closed.
            VitriFlex fills the gap by offering:
          </p>

          <ul>
            <li>✔ Industrial-grade reproducibility</li>
            <li>✔ Open-source hardware and software</li>
            <li>✔ 3D-printed, low-cost modular components</li>
            <li>✔ Full freedom to modify protocols</li>
          </ul>

          <h2>A Modular System Built for Innovation</h2>
          <p>
            VitriFlex uses a high-precision Epson SCARA robot mounted to an optical breadboard,
            supporting interchangeable components such as blotting tools, sprayers, acoustic
            transducers, humidity chambers, and cryogen holders.
          </p>

          <h2>Flexible Sample Delivery</h2>
          <p>
            The platform supports multiple workflows:
          </p>

          <ul>
            <li><strong>Standard blot-and-plunge</strong></li>
            <li><strong>Pre-mixing on an acoustic transducer</strong></li>
            <li><strong>On-grid mixing</strong></li>
            <li><strong>Rapid spray-to-plunge vitrification (~130 ms)</strong></li>
          </ul>

          <h2>Real-World Performance</h2>

          <p>
            VitriFlex produced high-quality grids suitable for high-resolution results across:
          </p>

          <ul>
            <li>• Apoferritin (1.9 Å)</li>
            <li>• E. coli dGTPase (2.8 Å)</li>
            <li>• Spike–ACE2 Complex</li>
            <li>• α7–Bungarotoxin Receptor</li>
          </ul>

          <h2>Conclusion</h2>
          <p>
            VitriFlex combines precision robotics, modular design, and open-source engineering to
            create a powerful, affordable cryo-EM specimen preparation system. It empowers labs to
            explore new workflows while keeping costs low and flexibility high.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog1;
