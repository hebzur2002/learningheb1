import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'   // naya import
import Footer from './components/Footer.jsx'

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <nav>
          <Link to="/">Home</Link> | <Link to="/contact">Contact</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          {/* Ye "catch-all" route hai - jo bhi URL match na ho, ye dikhega */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
