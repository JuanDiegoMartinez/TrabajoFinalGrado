import {Login} from "../../../models/data/Login";
import {SubmissionError} from "redux-form";

interface IErrors {
    email: string | undefined,
    password: string | undefined,
}

//Valida cada campo por separado
export const validate = (formValues: any) : IErrors | any => {

    const errors: IErrors = {
        email: undefined,
        password: undefined
    };

    const frase = "Debes rellenar este campo.";

    if (!formValues.email) {
        errors.email = frase;
    }

    if (!formValues.password) {
        errors.password = frase;
    }

    return errors;
}

export const handleButtonValidate = async (formValues: Login) => {

    const response = await fetch('/compruebaLogin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({email: formValues.email, password: formValues.password})
    });

    const body = await response.json();

    if (body) {
        throw new SubmissionError({
            email: "El email o la contraseña son incorrectos",
            password: "El email o la contraseña son incorrectos"
        })
    }
}