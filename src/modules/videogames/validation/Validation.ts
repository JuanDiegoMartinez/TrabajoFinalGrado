import {SubmissionError} from "redux-form";

export const handleButtonValidate = (formValues: any) => {

    if (formValues.comentario === undefined) {
        throw new SubmissionError({
            comentario: "El comentario no puede estar vacío.",
        })
    }
}