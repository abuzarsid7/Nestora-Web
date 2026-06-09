import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <Link to="/" className="logo-link" onClick={closeMenu}>
        <img src="/logo.png" alt="Nestora Logo" className="logo-img" />
        <span className="logo-text">Nestora</span>
      </Link>

      <button 
        className="hamburger-btn" 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle navigation menu"
      >
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
        <Link to="/support" className="nav-link" onClick={closeMenu}>Support</Link>
        <Link to="/contact" className="nav-link" onClick={closeMenu}>Contact</Link>
        <Link to="/privacy" className="nav-link" onClick={closeMenu}>Privacy</Link>
      </nav>
    </header>
  );
};

export default Navbar;
