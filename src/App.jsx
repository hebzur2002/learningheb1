import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    // BrowserRouter pura app ko "routing" ki power deta hai
    <BrowserRouter>
      <div className="container">
        {/* Navigation menu - Link se page change hota hai bina reload ke */}
        <nav>
          <Link to="/">Home</Link> | <Link to="/contact">Contact</Link>
        </nav>

        {/* Routes batata hai kaunse URL pe kaunsa page dikhana hai */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />   {/* naya add kiya */}
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
