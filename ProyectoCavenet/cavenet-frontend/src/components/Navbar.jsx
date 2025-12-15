import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-cavBlue text-white p-4 flex gap-6">
      <Link to="/">Inicio</Link>
      <Link to="/planes">Planes</Link>
      <Link to="/cobertura">Cobertura</Link>
      <Link to="/reporta-pago">Reporta Pago</Link>
      <Link to="/contacto">Contacto</Link>
      <Link to="/mi-cuenta">Mi Cuenta</Link>
      <Link to="/usuarios">Usuarios</Link> {/* 🔹 Enlace al componente */}
    </nav>
  );
}

export default Navbar;
