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
                    <form action="">
                        
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
