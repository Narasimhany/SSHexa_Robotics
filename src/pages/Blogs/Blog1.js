import React from "react";
import product1 from "../EPSON.png"; 
import "./BlogDetail.css";

const Blog1 = () => {
  return (
    <div className="blog-detail">
      <h1>How To Get Started With Automation For SMEs</h1>
      <img src={product1} alt="Blog 1" className="blog-detail-image" />

      <p>
        Robotic automation is emerging as a transformative force for small and medium enterprises...
      </p>

      <p>
        (Add your full blog content here)
      </p>
    </div>
  );
};

export default Blog1;
