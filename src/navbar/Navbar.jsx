import { useState } from "react";
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
                    <li><a href="/">Home</a></li>
                    <li><a href="/installation-guide">Installation-Guide</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
                <div className={`overlay ${menuOpen ? "show" : ""}`} onClick={closeMenu}></div>
            </nav>
        </>
    );
  };

export default Navbar;
