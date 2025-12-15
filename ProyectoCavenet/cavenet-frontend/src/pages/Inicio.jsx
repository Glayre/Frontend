import { Link } from "react-router-dom";

function Inicio() {
  return (
    <section className="bg-cavGray text-cavDark min-h-screen flex flex-col items-center justify-center px-6 py-12 text-center">
      {/* Hero principal */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
        Prepárate para el Internet de Alta Velocidad
      </h1>
      <p className="text-lg md:text-xl mb-6 max-w-2xl">
        Pulsa para acceder y realiza tus pagos. Disfruta de múltiples opciones de pago online y activación inmediata del servicio.
      </p>

      {/* Botón CTA */}
      <Link
        to="/mi-cuenta"
        className="bg-cavBlue text-white border border-white px-8 py-3 rounded-lg shadow-md hover:bg-cavDark transition"
      >
        ¡Contrata ahora!
      </Link>

      {/* Beneficios */}
      <ul className="mt-10 space-y-2 text-left max-w-xl">
        <li className="flex items-start gap-2">
          <span className="text-cavBlue font-bold">•</span>
          Consulta información de tus servicios
        </li>
        <li className="flex items-start gap-2">
          <span className="text-cavBlue font-bold">•</span>
          Múltiples opciones de Pago Online
        </li>
        <li className="flex items-start gap-2">
          <span className="text-cavBlue font-bold">•</span>
          Activación inmediata del servicio
        </li>
      </ul>

      {/* Frase final */}
      <p className="mt-10 text-xl font-semibold text-cavBlue">
        ¿Qué esperas para contratar Internet de Fibra Óptica?
      </p>
      <p className="text-lg font-medium text-cavDark">
        ¡Navega a ULTRA ALTA VELOCIDAD!
      </p>
    </section>
  );
}

export default Inicio;
