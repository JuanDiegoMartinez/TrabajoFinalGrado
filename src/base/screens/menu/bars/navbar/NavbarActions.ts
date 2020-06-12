import {Dispatch} from "react";
import {SESSION_ACTION} from "../../../../../redux/Types";

export const navbarAction = () => async (dispatch: Dispatch<any>) => {

    //Llamar al backend y pasarle los datos del login
    const response = await fetch('/session', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });

    const body = await response.json();

    dispatch({
        type: SESSION_ACTION,
        payload: body
    })
}