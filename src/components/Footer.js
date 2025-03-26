import React from "react";
import instagramIcon from "../assets/img/instagram.png"; // Actualiza la ruta según la ubicación de tu imagen
import facebookIcon from "../assets/img/facebook.png"; // Actualiza la ruta según tu imagen

function Footer() {
    return (
        <footer className="footer">
            {/* Sección Acerca de */}
            <div className="foot copy">
                <h3 className="title_about">Acerca de</h3>
                <p>
                    Desarrollado por la Ing. Kellyn Delgado. Portions of this
                    content are ©1998–2023 by individual mozilla.org contributors. Content available
                    under a Creative Commons license.
                </p>
            </div>

            {/* Sección Redes Sociales */}
            <div className="foot my_nets">
                <h3 className="title_nets">Redes Sociales</h3>
                <ul className="social_net">
                    <li>
                        <a href="#">
                            <img className="nets" src={instagramIcon} alt="Instagram" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img className="nets" src={facebookIcon} alt="Facebook" />
                        </a>
                    </li>
                </ul>
            </div>

            {/* Sección Ubicación */}
            <div className="foot map">
                <h3 className="title_ubi">Ubicación</h3>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.7851706070282!2d-74.0830493856258!3d4.632378696634874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f99a0f9bb0ce7%3A0x5d71ff487837183c!2sUniempresarial!5e0!3m2!1ses!2sco!4v1678568405853!5m2!1ses!2sco"
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mapa de ubicación"
                ></iframe>
            </div>
        </footer>
    );
}

export default Footer;