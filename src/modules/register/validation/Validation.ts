import {SubmissionError} from "redux-form";
import axios from "../../../connection/Axios";

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

export const handleButtonValidate = async (formValues: any) => {

    //if nombre de usuario and email no están en la bbdd

    //Compprueba que el email coincide
    if (formValues.email !== formValues.email2) {

        throw new SubmissionError({
            email: "El email no coincide",
            email2: "El email no coincide"
        })
    }

    //Comprueba que la contraseñas coinciden
    if (formValues.password === formValues.password2) {

        if (formValues.password.length < 6) {

            throw new SubmissionError({
                password: "La contraseña no puede tener menos de 6 caracteres",
                password2: "La contraseña no puede tener menos de 6 caracteres"
            })
        }
    } else {

        throw new SubmissionError({
            password: "La contraseña no coincide",
            password2: "La contraseña no coincide"
        })
    }

    let compruebaAliasyEmail = await handleComprobaciones(formValues.user, formValues.email);

    if (compruebaAliasyEmail.estaAlias) {
        throw new SubmissionError({
            user: "El nombre de usuario ya esta en uso"
        })
    }

    if (compruebaAliasyEmail.estaEmail) {
        throw new SubmissionError({
            email: "El email ya esta en uso",
            email2: "El email ya esta en uso"
        })
    }

}

//Comprueba que el alias y el email no estén en la bbdd
export const handleComprobaciones = async (alias: string, email: string): Promise<any> => {

    let aliasEmail = {
        alias,
        email
    };

    let compruebaAliasyEmail = await axios.post("/compruebaAliasyEmail", aliasEmail);

    return compruebaAliasyEmail.data;
}