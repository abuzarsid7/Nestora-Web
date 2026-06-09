import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Support from './components/Support';
import Contact from './components/Contact';
import Privacy from './components/Privacy';

function App() {
  return (
    <Router>
      <div className="bg-blob blob-1"></div>
      <div className="bg-blob blob-2"></div>
      
      <div className="container">
        <Navbar />

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/support" element={<Support />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>

        <footer className="footer">
          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/support">Support</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/privacy">Privacy Policy</Link>
          </div>
          <p>Questions? Contact <a href="mailto:support@abitechpros.com">support@abitechpros.com</a></p>
          <p style={{ marginTop: '1rem', fontSize: '0.875rem' }}>&copy; {new Date().getFullYear()} Nestora. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
