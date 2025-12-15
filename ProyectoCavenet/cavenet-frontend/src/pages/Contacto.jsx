function Contacto() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-cavGray text-cavDark">
      <div className="text-center max-w-lg">
        <h1 className="text-3xl font-bold mb-4">Contáctanos</h1>
        <p className="text-lg mb-6">
          Nuestra comunicación contigo es importante. Completa el formulario y te responderemos lo antes posible.
        </p>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Nombre"
            className="w-full px-4 py-2 border rounded-lg"
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            className="w-full px-4 py-2 border rounded-lg"
          />
          <textarea
            placeholder="Mensaje"
            className="w-full px-4 py-2 border rounded-lg h-32"
          ></textarea>
          <button
            type="submit"
            className="bg-cavBlue text-white px-6 py-2 rounded-lg shadow-md hover:bg-cavDark transition"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contacto;
