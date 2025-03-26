import React from "react";
import '../assets/css/styles.css';


export function Card({ data }) {
    return (
        <div className="card">
            <h3 className="title-card">Datos del PDR</h3>
            <hr />
            <h4 className="data-card">
                NOMBRE Y APELLIDOS: {data.name.toUpperCase()} {data.lastName.toUpperCase()}
            </h4>
            <p className="text-mail">CORREO ELECTRÓNICO: {data.email}</p>
            <p className="text-telefono">TELÉFONO: {data.phone}</p>
            <p className="text-msn">MENSAJE: {data.message}</p>
        </div>
    );
}

export default Card;