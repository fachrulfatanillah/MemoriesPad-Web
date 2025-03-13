import { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
  
    const closeMenu = () => {
      setMenuOpen(false);
    };
  
    return (
        <>
            <nav>
            <a href="/" className="brand">
                <img src="/logo/Logo-128x128.png" alt="Logo" className="logo" />
                <h2>Memories Pad</h2>
            </a>
                <button className="menu-toggle" onClick={toggleMenu}>☰</button>
                <ul className={menuOpen ? "show" : ""}>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/installation-guide">Installation Guide</Link></li>
                  <li><Link to="/about">About</Link></li>
                </ul>
                <div className={`overlay ${menuOpen ? "show" : ""}`} onClick={closeMenu}></div>
            </nav>
        </>
    );
  };

export default Navbar;
