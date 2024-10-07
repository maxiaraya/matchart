import React from 'react'
import { Link } from 'react-router-dom'

const Inicio: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Bienvenido a Matchart</h1>
      <p className="text-xl mb-8">¡Conecta artistas con escenarios y da vida a las actuaciones!</p>
      <div className="space-x-4">
        <Link to="/registro" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
          Comenzar
        </Link>
      </div>
    </div>
  )
}

export default Inicio