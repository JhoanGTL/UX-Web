import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Accessibility from "./components/Accesibility";
import FormularioPQR from "./components/FormularioPQR";
import Inicio from "./components/Inicio";
import Card from "./components/Card";
import "./assets/css/styles.css";

function App() {
    const [cards, setCards] = useState([]); // Estado para las tarjetas

    // Manejar el envío del formulario
    const handleFormSubmit = (formData) => {
        const { name, email, message } = formData;

        // Validar los campos obligatorios antes de agregar la tarjeta
        if (!name || !email.includes("@") || !message) {
            alert("Por favor, llena todos los campos correctamente.");
            return;
        }

        setCards([...cards, formData]); // Actualizar el estado de las tarjetas
    };

    return (
        <Router>
            <Header />

            <Routes>
                {/* Ruta principal con el formulario y las tarjetas */}
                <Route
                    path="/"
                    element={
                        <div className="App">
                                  <Accessibility />
                            <main>
                                <FormularioPQR onSubmit={handleFormSubmit} />
                                <section className="allCards">
                                    {cards.map((cardData, index) => (
                                       console.log("Datos de la tarjeta:", cardData),
                                        <Card key={index} data={cardData} />
                                    ))}
                                </section>
                            </main>
                        </div>
                    }
                />

                {/* Vista solo para las tarjetas */}
                <Route
                    path="/card"
                    element={
                        <section className="allCards">
                            {cards.map((cardData, index) => (
                                <Card key={index} data={cardData} />
                            ))}
                        </section>
                    }
                />

                {/* Página de inicio */}
                <Route path="/inicio" element={<Inicio />} />

                {/* Página del formulario */}
                <Route
                    path="/formulario"
                    element={<FormularioPQR onSubmit={handleFormSubmit} />}
                />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;