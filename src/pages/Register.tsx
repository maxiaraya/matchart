import React, { useState } from 'react'

const Register: React.FC = () => {
  const [userType, setUserType] = useState<'artist' | 'venue'>('artist')

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Register for Matchart</h2>
      <div className="mb-4">
        <label className="block mb-2">I am a:</label>
        <div className="flex space-x-4">
          <button
            className={`px-4 py-2 rounded ${userType === 'artist' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setUserType('artist')}
          >
            Artist
          </button>
          <button
            className={`px-4 py-2 rounded ${userType === 'venue' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setUserType('venue')}
          >
            Venue Owner/Producer
          </button>
        </div>
      </div>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1">Name</label>
          <input type="text" id="name" className="w-full px-3 py-2 border rounded" required />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1">Email</label>
          <input type="email" id="email" className="w-full px-3 py-2 border rounded" required />
        </div>
        <div>
          <label htmlFor="password" className="block mb-1">Password</label>
          <input type="password" id="password" className="w-full px-3 py-2 border rounded" required />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Register
        </button>
      </form>
    </div>
  )
}

export default Register