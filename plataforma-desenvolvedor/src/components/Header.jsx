// src/components/Header.jsx
import React from "react";

const Header = () => {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 40px",
        backgroundColor: "#ffffff",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      {/* Logo */}
      <div style={{ fontWeight: "bold", fontSize: "1.5rem", color: "#4f46e5" }}>
        PlataformaDev
      </div>

      {/* Navegação */}
      <nav>
        <ul style={{ display: "flex", gap: "20px", listStyle: "none", margin: 0 }}>
          <li><a href="#inicio" style={linkStyle}>Início</a></li>
          <li><a href="#servicos" style={linkStyle}>Serviços</a></li>
          <li><a href="#contato" style={linkStyle}>Contato</a></li>
        </ul>
      </nav>

      {/* Botão de ação */}
      <a
        href="#contato"
        style={{
          backgroundColor: "#4f46e5",
          color: "#fff",
          padding: "10px 20px",
          borderRadius: "6px",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        Fale conosco
      </a>
    </header>
  );
};

const linkStyle = {
  textDecoration: "none",
  color: "#333",
  fontWeight: "500",
  transition: "color 0.2s",
};

export default Header;
