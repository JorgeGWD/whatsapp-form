import { useState, useEffect } from 'react'

const useForm = (callback, validate) => {

    const [ values, setValues ] = useState({
        name: '',
        email: '',
        phone: '',
        checkbox: ''
    })

    const [ errors, setErrors ] = useState({})

    const [ isSubmitting, setIsSubmitting] = useState(false)

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

        setErrors(validate(values))
        setIsSubmitting(true)
        //window.open("https://api.whatsapp.com/send?phone=577448989", "_blank");
    }

    useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmitting) {
            callback();
        }
    }, [errors])

    return {handleChange, values, handleSubmit, errors}
}

export default useForm