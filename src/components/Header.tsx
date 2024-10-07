import React from 'react'
import { Link } from 'react-router-dom'
import { Music } from 'lucide-react'

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Music size={24} />
          <span className="text-xl font-bold">Matchart</span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/register" className="hover:underline">Register</Link></li>
            <li><Link to="/artist-dashboard" className="hover:underline">Artist Dashboard</Link></li>
            <li><Link to="/venue-dashboard" className="hover:underline">Venue Dashboard</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header