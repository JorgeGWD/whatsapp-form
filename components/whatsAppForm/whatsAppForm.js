import React from 'react'
import './whatsAppForm.css'
import WhatsAppImg from '../../assets/icon_whatsapp.png'

const WhatsAppForm = () => {
    return (
        <div className="whats-app-box">
            <div className="whats-app-form">
                <div className="form-header">
                    <img src={WhatsAppImg} alt="WhatsApp"/>
                    <p>WhatsApp</p>
                </div>
                <div className="form-body">
                    <p>Para comunicarte con un asesor <br/> necesitamos los siguientes datos</p>
                    <form action="">
                        <label htmlFor="">Nombre</label>
                        <input type="text" name="name" placeholder="Escribe aquí" />
                        <label htmlFor="">Correo eléctronico</label>
                        <input type="email" name="email" placeholder="Escribe aquí" />
                        <label htmlFor="">Nº de WhatsApp</label>
                        <input type="tel" name="phone" placeholder="321 1234567" />
                        <div className="checkbox">
                            <input type="checkbox"/>
                            <p>He leído y acepto la política de privacidad</p>
                        </div>
                        <button type="submit">Iniciar Chat</button>
                    </form>
                </div>
                <div className="form-footer">
                    <p>footer</p>
                </div>
            </div>
            <div className="whats-app-button">
                <img src={WhatsAppImg} alt="WhatsApp"/>
                <p>Escríbenos por WhatsApp</p>
            </div>
        </div>
    )
}

export default WhatsAppForm
