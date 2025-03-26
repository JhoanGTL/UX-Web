import React from "react";
import "../assets/css/styles.css";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header id="header" className="container_header">
            <nav className="menu">
                <ul>
                    <li><Link to="/inicio">Inicio</Link></li>
                    <li><Link to="/servicios">Servicios</Link></li>
                    <li><Link to="/portafolio">Portafolio</Link></li>
                    <li><Link to="/formulario">Contacto PQRS</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;