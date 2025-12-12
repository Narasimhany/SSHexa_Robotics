import React from "react";
import heroImage from "../EPSON.png";
import fig4 from "../Images/F4.gif";   // Add your Figure 4 image
import fig5 from "../Images/F5.gif";   // Add your Figure 5 image
import "./CSdetail.css";
import { FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

const CS2 = () => {
  return (
    <div className="blog-wrapper">

      {/* ===== HERO SECTION ===== */}
      <div className="blog-hero">
        <div className="hero-left">

          <Link to="/casestudies" className="back-button">← Back</Link>

          <p className="blog-category">CASE STUDY</p>
          <h1>On-Grid Mixing for Rapid Protein–Protein Complex Formation</h1>

          <div className="blog-meta">
            <div className="author">
              <div className="author-icon">👤</div>
              <p>MAY 20, 2024 • 14 MINS</p>
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
          <img src={heroImage} alt="Case Study Hero" />
        </div>
      </div>

      {/* ===== CONTENT ===== */}
      <div className="blog-content-section">

        {/* Sidebar Navigation */}
        <aside className="blog-sidebar">
          <h3>In This Case Study</h3>
          <ul>
            <li><a href="#spike-ace2">Spike–ACE2 Mixing</a></li>
            
            <li><a href="#alpha7">α7 Receptor Mixing</a></li>
            
            <li><a href="#conclusion">Conclusion</a></li>
          </ul>
        </aside>

        {/* MAIN CONTENT */}
        <div className="blog-content">

          {/* SECTION 1 — Spike–ACE2 */}
          <h2 id="spike-ace2">Rapid Mixing of SARS-CoV-2 Spike with ACE2</h2>

          <p>
            To test how effectively the system enables on-grid formation of transient complexes,
            we examined the interaction between the SARS-CoV-2 spike ectodomain and its receptor,
            ACE2. A 300-mesh UltrAuFoil grid (R1.2/1.3) was positioned in the robotic setup, and
            ACE2 was first deposited onto the grid surface. Once blotting was initiated, the spike
            solution was delivered through the acoustic sprayer during the initial fraction of the
            blotting cycle. The remaining blotting time ensured rapid mixing before vitrification.
          </p>

          <p>
            This workflow produced grids with abundant collectable regions suitable for
            single-particle imaging. Data processing revealed several ACE2-binding stoichiometries,
            including complexes containing one, two, or three ACE2 molecules bound to the spike
            trimer. The primary reconstruction achieved a global resolution of approximately
            <strong>3.7 Å</strong>, demonstrating that extremely short mixing intervals are sufficient
            to form stable complexes on the grid.
          </p>

          {/* FIGURE 4 */}
          <h2 id="fig4"> Spike–ACE2 Cryo-EM Results</h2>
          <img src={fig4} alt="Spike ACE2 Results" className="blog-detail-image" />

          <p className="figure-caption">
            <strong>Fig</strong>  
            (A) Representative 2D classes showing ACE2 bound to one or more RBDs of the spike trimer.  
            (B) Cryo-EM density map of spike with a single ACE2 molecule bound.  
            (C) Gold-standard FSC curves indicating a ~3.7 Å reconstruction.  
            (D) Timeline of spray, incubation, blotting, and plunge parameters used.
          </p>

          {/* SECTION 2 — α7 nAChR */}
          <h2 id="alpha7">Mixing α7 Nicotinic Receptor with α-Bungarotoxin</h2>

          <p>
            We next evaluated the system using a membrane protein–ligand pair: the α7
            nicotinic acetylcholine receptor (nAChR) and α-bungarotoxin (α-Btx). The receptor
            sample was applied to gold grids, followed by a brief spray of α-Btx during the
            blotting step. This setup mimics time-resolved workflows where ligand binding must
            occur rapidly and under minimal sample consumption.
          </p>

          <p>
            After vitrification, datasets were processed through motion correction, CTF
            estimation, particle selection, and iterative refinement. Multiple binding states
            emerged, revealing receptors associated with different numbers of α-Btx molecules.
            The fully bound receptor, containing five toxin molecules, produced a high-quality
            reconstruction at <strong>2.6 Å</strong>. Lower-occupancy states primarily resolved the
            ectodomain, likely reflecting incomplete binding or structural heterogeneity.
          </p>

          {/* FIGURE 5 */}
          <h2 id="fig5"> α7–α-Btx Cryo-EM Results</h2>
          <img src={fig5} alt="Alpha7 Btx Results" className="blog-detail-image" />

          <p className="figure-caption">
            <strong>Fig</strong>  
            (A) Example 2D classes of α7 nAChR particles with varying toxin occupancy.  
            (B) Reconstructed 3D densities of the receptor in different orientations.  
            (C) FSC curves showing a ~2.6 Å gold-standard resolution for the fully bound state.  
            (D) Schematic of the timing parameters used for mixing and plunging.
          </p>

          {/* CONCLUSION */}
          <h2 id="conclusion">Conclusion</h2>

          <p>
            These two case studies highlight the strength of on-grid mixing for studying
            dynamic protein interactions. The robotic workflow supports rapid complex formation,
            efficient use of low sample volumes, and robust vitrification timing. Together,
            the results show that short incubation times—on the order of milliseconds to a few
            seconds—are sufficient for generating structurally stable complexes ready for
            high-resolution analysis. This makes the platform particularly well-suited for
            biochemical reactions that occur too quickly for manual preparation methods.
          </p>

        </div>
      </div>
    </div>
  );
};

export default CS2;
