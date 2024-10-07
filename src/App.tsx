import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Encabezado from './componentes/Encabezado'
import Inicio from './paginas/Inicio'
import PanelArtista from './paginas/PanelArtista'
import PanelEscenario from './paginas/PanelEscenario'
import Registro from './paginas/Registro'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Encabezado />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/panel-artista" element={<PanelArtista />} />
            <Route path="/panel-escenario" element={<PanelEscenario />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App