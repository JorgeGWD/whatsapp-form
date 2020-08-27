import React from 'react'
import './whatsAppForm.css'
import WhatsAppImg from '../../assets/icon_whatsapp.png'

const WhatsAppForm = () => {
    return (
        <div className="whats-app-button">
            <img src={WhatsAppImg} alt=""/>
            <p>Escríbenos por WhatsApp</p>
        </div>
    )
}

export default WhatsAppForm
