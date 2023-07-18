import React from 'react'
import AppRoutes from './routes'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="team-network">
      <Header />
      <Navbar />
      <div className="content">
        <AppRoutes />
      </div>
      <Footer />
    </div>
  )
}

export default App
