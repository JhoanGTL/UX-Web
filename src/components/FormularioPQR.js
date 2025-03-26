import React, { useState } from "react";
import "../assets/css/styles.css";
import Accessibility from "./Accesibility";


function FormularioPQR({ onSubmit }) {
    const [formData, setFormData] = useState({
        name: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, message } = formData;

        // Validar los campos obligatorios
        if (!name || !email.includes("@") || !message) {
            alert("Por favor, llena todos los campos correctamente.");
            return;
        }

        console.log("Datos enviados:", formData);
        onSubmit(formData);

        // Limpiar el formulario después de enviarlo
        setFormData({
            name: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
        });

        alert("Formulario enviado con éxito");
    };

    return (
        <div>
            <div>
                <section className="title">
                    <h1 className="h1">Contacto PQRS Uniempresarial</h1>
                </section>
                <Accessibility />
                <form id="fm_contact" className="fm_contact" onSubmit={handleSubmit}>
                    <h2 className="title_form">Llena el Formulario</h2>
                    <hr />
                    <label htmlFor="name">Nombres:</label>
                    <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <label htmlFor="lastName">Apellidos:</label>
                    <input
                        type="text"
                        id="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                    <label htmlFor="email">Correo Electrónico:</label>
                    <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <label htmlFor="phone">Número de Teléfono:</label>
                    <input
                        type="number"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                    <label htmlFor="message">Déjanos tu mensaje:</label>
                    <textarea
                        id="message"
                        rows="8"
                        cols="50"
                        className="msn"
                        placeholder="Escribe tu Mensaje"
                        required
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>
                    <button className="btn-enviar" id="btn-enviar">
                        Enviar Mensaje
                    </button>
                </form>
            </div>
        </div>
    );
}

export default FormularioPQR;