import React from "react";
import Header from "./Header";
import ueImage1 from "../assets/img/ueImage1.jpg"; 
import ueImage2 from "../assets/img/ueImage2.jpg";
import ueImage3 from "../assets/img/ueImage3.png";
import Accessibility from "./Accesibility";
import '../assets/css/styles.css';

function Inicio() {
    return (
        <div className="inicio-page">
            < Accessibility />
            <main className="ue-container">
                <section className="ue-description">
                    <h1> Aplicamos el modelo de formación Dual</h1>
                    <p>
                    El Modelo Dual es el modelo educativo distintivo de Uniempresarial que integra de manera efectiva la teoría y la práctica en la formación de nuestros estudiantes. Este enfoque innovador combina la educación académica en el aula con la aplicación práctica de los conocimientos en un entorno empresarial real.
                    </p>
                </section>

                <section className="ue-images">
                    <img src={ueImage1} alt="Campus principal" className="university-image" />
                    <img src={ueImage2} alt="Biblioteca de la universidad" className="university-image" />
                    <img src={ueImage3} alt="Área recreativa" className="university-image" />
                </section>
            </main>
        </div>
    );
}

export default Inicio;