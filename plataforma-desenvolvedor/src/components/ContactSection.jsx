// src/components/ContactSection.jsx
import React from "react";

const ContactSection = () => {
  return (
    <section id="contato" style={{ padding: "80px 20px", backgroundColor: "#f3f4f6" }}>
      <h2 style={{ fontSize: "2rem", textAlign: "center", marginBottom: "40px", color: "#4f46e5" }}>
        Entre em Contato
      </h2>
      <form
        style={{
          maxWidth: "500px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <input type="text" placeholder="Seu nome" style={inputStyle} />
        <input type="email" placeholder="Seu e-mail" style={inputStyle} />
        <textarea placeholder="Sua mensagem" rows={5} style={inputStyle}></textarea>
        <button
          type="submit"
          style={{
            padding: "12px",
            backgroundColor: "#4f46e5",
            color: "#fff",
            fontWeight: "bold",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Enviar Mensagem
        </button>
      </form>
    </section>
  );
};

const inputStyle = {
  padding: "12px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  fontSize: "1rem",
};

export default ContactSection;
