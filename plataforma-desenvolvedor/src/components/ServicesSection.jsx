// src/components/ServicesSection.jsx
import React from "react";

const services = [
  {
    title: "Desenvolvimento Web",
    description: "Criação de sites modernos e responsivos usando as melhores tecnologias.",
  },
  {
    title: "Soluções Mobile",
    description: "Aplicativos nativos e híbridos para Android e iOS.",
  },
  {
    title: "Consultoria",
    description: "Ajudamos você a transformar sua ideia em um produto digital real.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" style={{ padding: "80px 20px", textAlign: "center" }}>
      <h2 style={{ fontSize: "2rem", marginBottom: "40px", color: "#4f46e5" }}>Nossos Serviços</h2>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "30px" }}>
        {services.map((service, index) => (
          <div
            key={index}
            style={{
              width: "300px",
              padding: "20px",
              border: "1px solid #eee",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.05)",
              backgroundColor: "#fff",
            }}
          >
            <h3 style={{ color: "#111", marginBottom: "10px" }}>{service.title}</h3>
            <p style={{ color: "#555" }}>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
