import React from 'react'
import { Link } from 'react-router-dom'
import { Music } from 'lucide-react'

const Encabezado: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Music size={24} />
          <span className="text-xl font-bold">Matchart</span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/registro" className="hover:underline">Registro</Link></li>
            <li><Link to="/panel-artista" className="hover:underline">Panel de Artista</Link></li>
            <li><Link to="/panel-escenario" className="hover:underline">Panel de Escenario</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Encabezado