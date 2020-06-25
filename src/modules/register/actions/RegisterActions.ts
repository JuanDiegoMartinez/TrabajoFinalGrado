import {NEW_ACCOUNT, VACIAR_REDUCER_REGISTRO} from "../../../redux/Types";
import {Dispatch} from "react";
import {UserRegister} from "../../../models/data/User";

export const newUser = (formValues: UserRegister) => async (dispatch: Dispatch<any>) => {

    //Llamar al backend y pasarle los datos del formulario
    const response = await fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues)
    });

    const body = await response.json();

    dispatch({
        type: NEW_ACCOUNT,
        payload: body
    })
}

export const vaciarReducerRegistro = () => {

    return {
        type: VACIAR_REDUCER_REGISTRO,
        payload: ""
    }
}