// src/components/HeroSection.jsx
import React from "react";
import heroImage from "../assets/hero-image.png";

const HeroSection = () => {
  return (
    <section style={{ padding: "80px 20px", textAlign: "center", backgroundColor: "#f8f8f8" }}>
      <h1 style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: "20px" }}>
        Soluções Digitais para o seu Negócio
      </h1>
      <p style={{ fontSize: "1.2rem", color: "#555", marginBottom: "40px" }}>
        Transformamos ideias em sites modernos, funcionais e responsivos.
      </p>

      <img
        src={heroImage}
        alt="Imagem principal"
        style={{
          maxWidth: "100%",
          height: "auto",
          marginBottom: "40px",
        }}
      />

      <button
        style={{
          padding: "12px 30px",
          fontSize: "1rem",
          backgroundColor: "#4f46e5",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
        onClick={() => {
          document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Ver serviços
      </button>
    </section>
  );
};

export default HeroSection;
