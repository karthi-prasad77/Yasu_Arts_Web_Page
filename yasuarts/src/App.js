import './App.css';
import About from './components/About';
import Arts from './components/Art';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Skills from './components/Tool';
import Contact from './components/Contact';
import Social from './components/Social';

function App() {
  return (
   <div>
    <Navbar />
    <Home />
    <Social />
    <About />
    <Skills />
    <Arts />
    <Contact />
   </div>
  );
}

export default App;
