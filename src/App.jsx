import './App.css'
// Teeno naye components ko import kar rahe hain
import Header from './components/Header.jsx'
import About from './components/About.jsx'
import Footer from './components/Footer.jsx'

// Ab App.jsx sirf inko "jodne" ka kaam karta hai — asli content component files mein hai
function App() {
  return (
    <div className="container">
      <Header />
      <About />
      <Footer />
    </div>
  )
}

export default App
