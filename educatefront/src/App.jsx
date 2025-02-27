import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Courses from './pages/Courses'
import Community from './pages/Community'
import Certificates from './pages/Certificates'
import Profile from './pages/Profile'
import PaymentPage from './pages/PaymentPage'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  
  const handleLogin = () => {
    setIsLoggedIn(true)
  }
  
  const handleLogout = () => {
    setIsLoggedIn(false)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isLoggedIn={isLoggedIn} onLogin={handleLogin} onLogout={handleLogout} />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/community" element={<Community />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/payment" element={<PaymentPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App