import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Inicio from "./pages/Inicio";
import Planes from "./pages/Planes";
import Cobertura from "./pages/Cobertura";
import MiCuenta from "./pages/MiCuenta";

function App() {
  return (
    <div className="font-sans bg-cavGray text-cavDark min-h-screen flex flex-col">
      {/* Navbar fijo arriba */}
      <Navbar />

      {/* Contenido principal */}
      <main className="flex-1 p-6">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/planes" element={<Planes />} />
          <Route path="/cobertura" element={<Cobertura />} />
          <Route path="/mi-cuenta" element={<MiCuenta />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-cavBlue text-white text-center py-4">
        © 2025 CAVENET - Todos los derechos reservados
      </footer>
    </div>
  );
}

export default App;
