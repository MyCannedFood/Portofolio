import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Terminal from './pages/Terminal';

function App() {
  return (
    <div className="bg-base min-h-screen text-text flex flex-col md:flex-row">
      <Navbar />
      <main className="flex-1 md:ml-64 w-full">
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Projects />
              <About />
              <Footer />
            </>
          } />
          <Route path="/terminal" element={<Terminal />} />
        </Routes>
      </main>
    </div>
  )
}

export default App;
