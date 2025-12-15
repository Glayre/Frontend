import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// 🔹 Importa tus páginas
import Inicio from "./pages/Inicio";
import Cobertura from "./pages/Cobertura";
import Planes from "./pages/Planes";
import ReportaPago from "./pages/ReportaPago";
import Contacto from "./pages/Contacto";
import MiCuenta from "./pages/MiCuenta";
import Usuarios from "./pages/Usuarios";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar fijo arriba */}
      <Navbar />

      {/* Contenido principal */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/cobertura" element={<Cobertura />} />
          <Route path="/planes" element={<Planes />} />
          <Route path="/reporta-pago" element={<ReportaPago />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/mi-cuenta" element={<MiCuenta />} />
          <Route path="/usuarios" element={<Usuarios />} />
        </Routes>
      </main>

      {/* Footer opcional */}
      <footer className="bg-cavDark text-white text-center py-4">
        <p>Copyright © 2024 CAVENET - Todos los derechos reservados</p>
      </footer>
    </div>
  );
}

export default App;
