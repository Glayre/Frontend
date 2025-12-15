import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-cavBlue text-white px-8 py-4 flex justify-between items-center shadow-md">
      {/* Logo y nombre de marca */}
      <div className="flex items-center space-x-3">
        <img
          src="/logocavenet1.png" // 🔹 coloca tu logo en public/logocavenet1.png
          alt="CAVENET Logo"
          className="h-10 w-auto"
        />
        <span className="text-xl font-bold tracking-wide">CAVENET</span>
      </div>

      {/* Menú de navegación */}
      <div className="space-x-6 font-medium">
        <Link to="/" className="hover:text-cavGray transition-colors">Inicio</Link>
        <Link to="/planes" className="hover:text-cavGray transition-colors">Planes</Link>
        <Link to="/cobertura" className="hover:text-cavGray transition-colors">Cobertura</Link>
        <Link to="/mi-cuenta" className="hover:text-cavGray transition-colors">Mi Cuenta</Link>
        <Link to="/usuarios" className="hover:text-cavGray transition-colors">Usuarios</Link>
      </div>
    </nav>
  );
}

export default Navbar;
