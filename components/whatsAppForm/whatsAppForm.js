import React, { useState } from 'react'
import './whatsAppForm.css'
import WhatsAppImg from '../../assets/icon_whatsapp.png'

const WhatsAppForm = () => {

    const [ data, useData ] = useState();

    const [open, setOpen] = React.useState(false)

    const onSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="whats-app-box">
            <div className={open ? "whats-app-form" : "whats-app-form hide"}>
                <div className="form-header">
                    <img src={WhatsAppImg} alt="WhatsApp"/>
                    <p>WhatsApp</p>
                </div>
                <div className="form-body">
                    <p>Para comunicarte con un asesor <br/> necesitamos los siguientes datos</p>
                    <form onSubmit={onSubmit}>
                        <label htmlFor="">Nombre</label>
                        <input type="text" name="name" placeholder="Escribe aquí" required />
                        <label htmlFor="">Correo eléctronico</label>
                        <input type="email" name="email" placeholder="Escribe aquí" required />
                        <label htmlFor="">Nº de WhatsApp</label>
                        <input type="tel" name="phone" placeholder="321 1234567" required />
                        <div className="checkbox">
                            <input type="checkbox" required />
                            <p>He leído y acepto la política de privacidad</p>
                        </div>
                        <button type="submit">
                            <a href="https://api.whatsapp.com/send?phone=577448989" target="_blank">
                                Iniciar Chat
                            </a>
                        </button>
                    </form>
                </div>
                <div className="form-footer">
                    <p>footer</p>
                </div>
            </div>
            <button className="whats-app-button" onClick={() => {
                setOpen(!open);
            }}>
                <img src={WhatsAppImg} alt="WhatsApp"/>
                <p>Escríbenos por WhatsApp</p>
            </button>
        </div>
    )
}

export default WhatsAppForm
