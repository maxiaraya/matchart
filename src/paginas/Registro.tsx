import React, { useState } from 'react'

const Registro: React.FC = () => {
  const [tipoUsuario, setTipoUsuario] = useState<'artista' | 'escenario'>('artista')

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Registro en Matchart</h2>
      <div className="mb-4">
        <label className="block mb-2">Soy un:</label>
        <div className="flex space-x-4">
          <button
            className={`px-4 py-2 rounded ${tipoUsuario === 'artista' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setTipoUsuario('artista')}
          >
            Artista
          </button>
          <button
            className={`px-4 py-2 rounded ${tipoUsuario === 'escenario' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setTipoUsuario('escenario')}
          >
            Dueño/Productor de Escenario
          </button>
        </div>
      </div>
      <form className="space-y-4">
        <div>
          <label htmlFor="nombre" className="block mb-1">Nombre</label>
          <input type="text" id="nombre" className="w-full px-3 py-2 border rounded" required />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1">Correo electrónico</label>
          <input type="email" id="email" className="w-full px-3 py-2 border rounded" required />
        </div>
        <div>
          <label htmlFor="contrasena" className="block mb-1">Contraseña</label>
          <input type="password" id="contrasena" className="w-full px-3 py-2 border rounded" required />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Registrarse
        </button>
      </form>
    </div>
  )
}

export default Registro