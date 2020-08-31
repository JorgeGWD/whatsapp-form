export default function validateInfo(values) {
    let errors = {}

    if(!values.username.trim()) {
        errors.username = "Este campo es requerido"
    }

    if(!values.email) {
        errors.email = "Este campo es requerido"
    } else if(!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email invalido"
    }

    if(!values.phone) {
        errors.phone = "Este campo es requerido"
    } else if(values.phone.lenght < 10) {
        errors.phone = "El número de celular debe tener 10 digitos"
    }
    return errors;
}