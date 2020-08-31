import React, { useState } from 'react'
import './whatsAppForm.css'
import WhatsAppImg from '../../assets/icon_whatsapp.png'

const WhatsAppForm = () => {

    const [ data, useData ] = useState({
        name: '',
        email: '',
        phone: [],
        checkbox: false
    });

    const [open, setOpen] = useState(false)

    const handleChange = (e) => {
        console.log(e.target.value)
        useData({
            ...data,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit();
        window.open("https://api.whatsapp.com/send?phone=577448989", "_blank")
    }

    function onSubmit() {
        console.log('Submitted Succesfully')
    }

    return (
        <div className="whats-app-box">
            <div className={open ? "whats-app-form" : "whats-app-form hide"}>
                <div className="form-header">
                    <img src={WhatsAppImg} alt="WhatsApp"/>
                    <p>WhatsApp</p>
                    <p className="btn-close" onClick={() => { setOpen(!open); }}>X</p>
                </div>
                <div className="form-body">
                    <p>Para comunicarte con un asesor <br/> necesitamos los siguientes datos</p>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="">Nombre</label>
                        <input type="text" name="name" placeholder="Escribe aquí" onChange={handleChange} />
                        <label htmlFor="">Correo eléctronico</label>
                        <input type="email" name="email" placeholder="Escribe aquí" onChange={handleChange} />
                        <label htmlFor="">Nº de WhatsApp</label>
                        <input type="tel" name="phone" placeholder="321 1234567" onChange={handleChange}  />
                        <div className="checkbox">
                            <input type="checkbox" />
                            <p>He leído y acepto la política de privacidad</p>
                        </div>
                        <button type="submit">
                                Iniciar Chat
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
