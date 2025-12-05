import React from "react";
import "./Products.css";
import product1 from "./EPSON.png";
import product2 from "./background.png";

const Products = () => {
  return (
    <div className="products-page">
      <h1 className="products-title">Robots</h1>
      <p className="products-subtitle">
        SSHexa Robotics offers a series of fast, accurate, and agile robots that
        are ideal for flexible and tabletop automation.
      </p>

      <div className="product-grid">
        <div className="product-card">
          <img src={product1} alt="Dorna TA" className="product-image" />
          <div className="product-info">
            <h3 className="product-name">Vitriflex</h3>
            <p className="product-price">$5,990.00</p>
            <p className="product-desc">
              Vitriflex is a versatile 6-axis tabletop robot engineered to meet
              the demanding requirements of both industrial and educational
              sectors at an affordable cost.
            </p>
            <p>Know More</p>
          </div>
        </div>

        <div className="product-card">
          <img src={product2} alt="Dorna 2" className="product-image" />
          <div className="product-info">
            <h3 className="product-name">Dorna 2</h3>
            <p className="product-price">$2,990.00</p>
            <p className="product-desc">
              Dorna 2 is an industrial-grade tabletop robotic arm engineered for
              demanding industrial applications.
            </p>
            <p>Know More</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
