import { useEffect, useState } from "react";

function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);

  // 🔹 Simulación de carga de usuarios (más adelante conectarás con tu backend)
  useEffect(() => {
    const data = [
      {
        id: 1,
        nombre: "Glayré",
        apellido: "Calles",
        email: "glayre@example.com",
        telefono: "+58 4243770522",
        ciudad: "Maracay",
      },
      {
        id: 2,
        nombre: "Ana",
        apellido: "Pérez",
        email: "ana@example.com",
        telefono: "+58 4121234567",
        ciudad: "Valencia",
      },
    ];
    setUsuarios(data);
  }, []);

  return (
    <section className="min-h-screen bg-cavGray text-cavDark p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Gestión de Usuarios</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-cavBlue text-white">
              <th className="py-3 px-4 text-left">Nombre</th>
              <th className="py-3 px-4 text-left">Apellido</th>
              <th className="py-3 px-4 text-left">Correo</th>
              <th className="py-3 px-4 text-left">Teléfono</th>
              <th className="py-3 px-4 text-left">Ciudad</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((user) => (
              <tr key={user.id} className="border-b hover:bg-gray-100">
                <td className="py-2 px-4">{user.nombre}</td>
                <td className="py-2 px-4">{user.apellido}</td>
                <td className="py-2 px-4">{user.email}</td>
                <td className="py-2 px-4">{user.telefono}</td>
                <td className="py-2 px-4">{user.ciudad}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Usuarios;
