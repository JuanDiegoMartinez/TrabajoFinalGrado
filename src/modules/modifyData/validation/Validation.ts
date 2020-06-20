import {SubmissionError} from "redux-form";

export const handleButtonValidate = async (formValues: any, emailUser: string) => {

    if (formValues.password2 !== undefined) {

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
    }

    let compruebaAliasyEmail = await handleComprobaciones(formValues.user, formValues.email);

    if (formValues.email !== emailUser && compruebaAliasyEmail.estaEmail) {
        throw new SubmissionError({
            email: "El email ya esta en uso",
        })
    }

}

//Comprueba que el alias y el email no estén en la bbdd
export const handleComprobaciones = async (alias: string, email: string): Promise<any> => {


    const response = await fetch('/compruebaAliasyEmail', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({alias, email})
    });

    const body = await response.json();

    return body;
}

export const handleButtonValidateComments = (formValues: any) => {

    if (formValues.comentario === undefined) {
        throw new SubmissionError({
            comentario: "El comentario no puede estar vacío.",
        })
    }
}