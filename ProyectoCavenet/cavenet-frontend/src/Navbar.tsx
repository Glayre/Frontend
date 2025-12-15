import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-cavBlue text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">CAVENET</h1>
      <div className="space-x-6">
        <Link to="/" className="nav-link">Inicio</Link>
        <Link to="/planes" className="nav-link">Planes</Link>
        <Link to="/cobertura" className="nav-link">Cobertura</Link>
        <Link to="/mi-cuenta" className="nav-link">Mi Cuenta</Link>
      </div>
    </nav>
  );
}

export default Navbar;
