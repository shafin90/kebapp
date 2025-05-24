import React from 'react'
import './styles/animations.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Menu from './pages/Menu'
import About from './pages/About'
import ContactUs from './pages/ContactUs'
import Reservation from './pages/Reservation'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import LocomotiveScrollWrapper from './components/LocomotiveScrollWrapper'

const App: React.FC = () => {
  return (
    <Router>
      <ScrollProgress />
      <LocomotiveScrollWrapper>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/reservation" element={<Reservation />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </LocomotiveScrollWrapper>
    </Router>
  )
}

export default App 