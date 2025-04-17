import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">Plataforma Dev</h1>
        <nav className="space-x-6">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/login" className="hover:text-blue-600">Entrar</Link>
        </nav>
      </div>
    </header>
  );
}
