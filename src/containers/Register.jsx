import React from "react";
import "../assets/styles/pages/Register.scss";
import logo from "../assets/images/logo-platzimaster_1.png";

const Register = function () {
    return (
        <section className="container">
            <div className="container__img">
                <figure className="img__logo">
                    <img src={logo} alt="platzi-logo"/>
                </figure>
                <h3>Remember</h3>
            </div>
            <hr className="separator" />
            <div className="container__form">
                <div className="form__title">
                    <h4>
                        Cuanto más veces <strong>repases</strong> lo aprendido,<br/> lo fijarás mucho más tiempo en tu <strong>memoria</strong> 🧠
                    </h4>
                </div>
                <div className="form__register">
                    <form action="" className="form__register-form" method="" required="" autocapitalize="off">
                        <input type="text" name="nickname" id="nickname" placeholder="Ingresa tu usuario de Platzi" required="" />
                        <input type="text" name="username" id="username" placeholder="Nombres" required="" />
                        <input type="text" name="userlastname" id="userlastname" placeholder="Apellidos" required="" />
                        <input type="email" name="usermail" id="usermail" placeholder="Correo Electrónico" required="" />
                        <input type="password" name="userpass" id="userpass" placeholder="Contraseña ***" required="" />
                        <input type="password" name="passconfirm" id="passconfirm" placeholder="Digita Nuevamente la Contraseña ***" required="" />
                        <p className="form-register-text">
                            Al registrarte aceptas <a href="https://platzi.com/tos/" target="_blank" rel="noreferrer">Términos de Servicio</a> y <a href="https://platzi.com/privacidad/" target="_blank" rel="noreferrer">Política de Privacidad</a>
                        </p>
                        <button type="submit" className="sub-button">REGÍSTRATE</button>
                    </form>
                    <p className="form-register-text">
                        ¿Estás registrado? Ingresa <a href="/login.html">aquí</a>
                    </p>
                    <p id="message" className="text__mesagge-submit"></p>
                </div>
            </div>
        </section>
    );
}
export default Register;