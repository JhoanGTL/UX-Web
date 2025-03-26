// import React, { useState } from "react";
// import FormularioPQR from "./components/FormularioPQR"; // Formulario
// import Card from "./components/Card"; // Componente de tarjeta
// import "./assets/css/styles.css"; // Estilos

// function firstapp() {
//     const [cards, setCards] = useState([]); // Estado para las tarjetas

//     const handleFormSubmit = (formData) => {
//         // Validar datos antes de agregar la tarjeta
//         const { name, lastName, email, phone, message } = formData;
//         if (!name || !email.includes("@") || !message) {
//             alert("Por favor, llena todos los campos correctamente.");
//             return;
//         }

//         // Agregar nueva tarjeta al estado
//         setCards([...cards, formData]);
//     };

//     return (
//         <div className="app-container">
//             <FormularioPQR onSubmit={handleFormSubmit} />
//             <section className="allCards">
//                 {cards.map((cardData, index) => (
//                     <Card key={index} data={cardData} />
//                 ))}
//             </section>
//         </div>
//     );
// }

// export default firstapp;