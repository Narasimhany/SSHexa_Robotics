import React from "react";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";  // ✅ import navigation hook
import "./HomeHero.css";

const HomeHero = () => {
  const navigate = useNavigate(); // initialize navigation

  return (
    <div
      className="hero-section"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container fluid className="text-center hero-content">
        <h1 className="hero-title">Hexa Robotics</h1>
        <p className="hero-subtext">
          High-precision robots engineered to accelerate innovation in cryo-EM sample preparation and laboratory automation.
        </p>
        <div className="hero-buttons">
          {/* 🔗 Navigate to /services */}
          <Button
            variant="secondary"
            className="me-3"
            onClick={() => navigate("/services")}
          >
           SERVICES
          </Button>

          {/* 🔗 Navigate to /about */}
          <Button
            variant="outline-light"
            onClick={() => navigate("/products")}
          >
            Products
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default HomeHero;
