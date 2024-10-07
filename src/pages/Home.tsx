import React from 'react'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Matchart</h1>
      <p className="text-xl mb-8">Connect artists with venues and bring performances to life!</p>
      <div className="space-x-4">
        <Link to="/register" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
          Get Started
        </Link>
      </div>
    </div>
  )
}

export default Home