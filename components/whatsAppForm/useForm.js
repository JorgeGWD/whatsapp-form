import { useState, useEffect } from 'react'

const useForm = () => {

    const [ values, setValues ] = useState({
        name: '',
        email: '',
        phone: '',
        checkbox: ''
    })

    const [ errors, setErrors ] = useState({})

    const handleChange = (e) => {
        // console.log(e.target.value)
        const { name, value } = e.target
        setValues({
            ...values,
            [name] : value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit();
        window.open("https://api.whatsapp.com/send?phone=577448989", "_blank");
    }

    return {handleChange, values, handleSubmit}
}

export default useForm