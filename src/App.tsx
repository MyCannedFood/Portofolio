import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Terminal from './pages/Terminal';

/**
 * App Component
 * The root component of the application. 
 * Handles layout structure and client-side routing.
 */
function App() {
  return (
    // Main layout container with Catppuccin 'base' background
    // Uses a horizontal layout on medium screens and larger, 
    // with the Navbar as a sidebar.
    <div className="bg-base min-h-screen text-text flex flex-col md:flex-row">
      {/* Sidebar Navigation */}
      <Navbar />

      {/* Main Content Area */}
      {/* Offset by the sidebar width (ml-64) on desktop */}
      <main className="flex-1 md:ml-64 w-full">
        <Routes>
          {/* Landing Page Route */}
          <Route path="/" element={
            <>
              <Hero />
              <Experience />
              <About />
              <Projects />
              <Footer />
            </>
          } />
          {/* Interactive Terminal Page Route */}
          <Route path="/terminal" element={<Terminal />} />
        </Routes>
      </main>
    </div>
  )
}

export default App;

