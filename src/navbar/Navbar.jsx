import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

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
                    <li className={location.pathname === "/" ? "active" : ""}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={location.pathname === "/installation-guide" ? "active" : ""}>
                        <Link to="/installation-guide">Installation Guide</Link>
                    </li>
                    <li className={location.pathname === "/about" ? "active" : ""}>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
                <div className={`overlay ${menuOpen ? "show" : ""}`} onClick={closeMenu}></div>
            </nav>
        </>
    );
};

export default Navbar;
