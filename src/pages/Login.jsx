import React from "react";
import "../assets/styles/pages/Login.scss";
import logo from "../assets/images/logo-platzimaster_1.png";

const Login = ()=>{
    return(
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
                    <strong>Planificar</strong> muchas veces los repasos ⏱ <br/> es mejor que solamente estudiar 🧠<br/> intensivamente una sola vez 🤔
                </h4>
            </div>
            <div className="form__register">
                <form action="" className="form__register-form" method="" required="" autocapitalize="off">
                    <input type="email" name="usermail" id="usermail" placeholder="Tu Email" required="" />
                    <input type="password" name="userpass" id="userpass" placeholder="Tu Contraseña" required="" />
                    <p className="form-register-text">
                        <a href="/">¿Olvidaste tu contraseña?</a>
                    </p>
                    <button type="submit" className="sub-button">INICIA SESIÓN</button>
                </form>
                <p className="form-register-text">
                    ¿Aún no estás registrado? Ingresa <a href="/new-account.html">aquí</a>
                </p>
                <p id="message" className="text__mesagge-submit"></p>
            </div>
        </div>
    </section>
    );
};

export default Login;