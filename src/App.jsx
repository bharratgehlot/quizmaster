
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Contact from './pages/Contact';
import Play2 from './pages/Play2';
import Play1 from './pages/Play1';



// src/App.jsx
function App() {

  return (
    <>

      <nav style={{
        display: 'flex',
        gap: '1rem',
        padding: '1rem',
        background: '#ddd'
      }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/play1" element={<Play1 />} />
        <Route path="/play2" element={<Play2 />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;

