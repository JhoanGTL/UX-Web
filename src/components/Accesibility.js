import React, { useState } from "react";
import "../assets/css/styles.css"; 

function Accesibility() {
    const [fontSize, setFontSize] = useState(16); // Estado para el tamaño de fuente
    const [contrastActive, setContrastActive] = useState(false); // Estado para el contraste

    // Manejar el aumento de fuente
    const handleIncreaseFont = () => {
        if (fontSize < 24) {
            setFontSize(fontSize + 1);
            document.body.style.fontSize = `${fontSize + 1}px`;
            // Ajustar todos los labels también
            document.querySelectorAll("label").forEach((label) => {
                const currentSize = parseFloat(window.getComputedStyle(label).fontSize);
                if (currentSize < 24) {
                    label.style.fontSize = `${currentSize + 1}px`;
                }
            });
        }
    };

    // Manejar la disminución de fuente
    const handleDecreaseFont = () => {
        if (fontSize > 12) {
            setFontSize(fontSize - 1);
            document.body.style.fontSize = `${fontSize - 1}px`;
            // Ajustar todos los labels también
            document.querySelectorAll("label").forEach((label) => {
                const currentSize = parseFloat(window.getComputedStyle(label).fontSize);
                if (currentSize > 12) {
                    label.style.fontSize = `${currentSize - 1}px`;
                }
            });
        }
    };

    // Manejar el contraste
    const handleToggleContrast = () => {
        setContrastActive(!contrastActive);
        document.body.classList.toggle("modo-contraste", !contrastActive);
    };

    return (
        <div className="btn-accesibility">
            <button id="addFont" onClick={handleIncreaseFont}>
                A+
            </button>
            <button id="susFont" onClick={handleDecreaseFont}>
                A-
            </button>
            <button id="contrast" onClick={handleToggleContrast}>
                🌙
            </button>
        </div>
    );
}

export default Accesibility;