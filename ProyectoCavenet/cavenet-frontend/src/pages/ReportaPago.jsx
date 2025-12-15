function ReportaPago() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-cavGray text-cavDark">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Reporta tu Pago</h1>
        <p className="text-lg mb-6">
          Aquí podrás registrar tus pagos o transferencias de manera rápida y segura.
        </p>
        <form className="space-y-4 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Número de referencia"
            className="w-full px-4 py-2 border rounded-lg"
          />
          <input
            type="number"
            placeholder="Monto en USD"
            className="w-full px-4 py-2 border rounded-lg"
          />
          <button
            type="submit"
            className="bg-cavBlue text-white px-6 py-2 rounded-lg shadow-md hover:bg-cavDark transition"
          >
            Enviar Pago
          </button>
        </form>
      </div>
    </section>
  );
}

export default ReportaPago;

