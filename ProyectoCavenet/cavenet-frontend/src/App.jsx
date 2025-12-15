import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Inicio from "./pages/Inicio";
import Cobertura from "./pages/Cobertura";
import Contratar from "./pages/Contratar";
import Planes from "./pages/Planes";
import ReportaPago from "./pages/ReportaPago";
import Contacto from "./pages/Contacto";
import MiCuenta from "./pages/MiCuenta";
import Usuarios from "./pages/Usuarios";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-cavGray text-cavDark">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/cobertura" element={<Cobertura />} />
          <Route path="/contratar" element={<Contratar />} />
          <Route path="/planes" element={<Planes />} />
          <Route path="/reporta-pago" element={<ReportaPago />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/mi-cuenta" element={<MiCuenta />} />
          <Route path="/usuarios" element={<Usuarios />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
