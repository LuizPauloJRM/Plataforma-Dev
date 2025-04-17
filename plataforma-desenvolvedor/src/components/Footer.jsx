// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer style={{ padding: "30px 20px", textAlign: "center", backgroundColor: "#111", color: "#fff" }}>
      <p>&copy; {new Date().getFullYear()} PlataformaDev. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;
