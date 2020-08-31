import React, { useState } from 'react'
import WhatsAppInputs from './whatsAppInputs'

const whatsAppForm = () => {

    const [ isSubmitted, setIsSubmitted ] = useState(false)

    function submitForm() {
        setIsSubmitted(true)
    }

    function whatsAppWeb() {
        window.open("https://api.whatsapp.com/send?phone=577448989", "_blank")
    }

    return (
        <div>
            <WhatsAppInputs />
            {!setIsSubmitted ? (<WhatsAppInputs submitForm={submitForm} />) : `${whatsAppWeb}`}
        </div>
    )
}

export default whatsAppForm
