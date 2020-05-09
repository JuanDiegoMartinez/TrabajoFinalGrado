import {SubmissionError} from "redux-form";

interface IErrors {
    user: string | undefined,
    nombre: string | undefined,
    email: string | undefined,
    email2: string | undefined,
    password: string | undefined,
    password2: string | undefined,
}

//Valida cada campo por separado
export const validate = (formValues: any) : IErrors | any =>  {

    const errors : IErrors = {
        user: undefined,
        nombre: undefined,
        email: undefined,
        email2: undefined,
        password: undefined,
        password2: undefined
    };

    const frase = "Debes rellenar este campo.";

    if(!formValues.user) {
        errors.user = frase;
    }

    if(!formValues.nombre) {
        errors.nombre = frase;
    }

    if(!formValues.email) {
        errors.email = frase;
    }

    if(!formValues.email2) {
        errors.email2 = frase;
    }

    if(!formValues.password) {
        errors.password = frase;
    }

    if(!formValues.password2) {
        errors.password2 = frase;
    }
    return errors;
}

export const submitValidate = (formValues: any) : void => {

    //if nombre de usuario and email no están en la bbdd

    if (formValues.email !== formValues.email2) {

        throw new SubmissionError({
            email: "El email no coincide",
            email2: "El email no coincide"
        })
    }

    if (formValues.password === formValues.password2) {

        if (formValues.password.length < 6) {

            throw new SubmissionError({
                password: "La contraseña no puede tener menos de 6 caracteres",
                password2: "La contraseña no puede tener menos de 6 caracteres"
            })
        }
    }
    else {

        throw new SubmissionError({
            password: "La contraseña no coincide",
            password2: "La contraseña no coincide"
        })
    }
}