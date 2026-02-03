import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home/Home';
import Navbar from './components/navbar/Navbar';
import CV from './pages/CV/CV';
import Works from './pages/Works/Works';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router basename="/Portifolio">
      <Navbar />
      <Routes>
        {/* Redireciona da raiz para /Home */}
        <Route path="/" element={<Navigate to="/Home" replace />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/CV" element={<CV />} />
        <Route path="/Works" element={<Works />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
