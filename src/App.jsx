import './App.css'

// Ye main component hai jo pura page banata hai
function App() {
  return (
    <div className="container">
      {/* Header section */}
      <header>
        <h1>Welcome to My Website 🚀</h1>
        <p>Built with React, deployed via Vercel</p>
      </header>

      {/* About section */}
      <section className="about">
        <h2>About Me</h2>
        <p>Ye mera pehla React website hai jo maine khud banaya hai.</p>
      </section>

      {/* Footer section */}
      <footer>
        <p>© 2026 My Website. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
