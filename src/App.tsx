import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-950 min-h-screen text-white flex flex-col md:flex-row">
      <Navbar />
      <main className="flex-1 md:ml-64 w-full">
        <Hero />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

export default App;
