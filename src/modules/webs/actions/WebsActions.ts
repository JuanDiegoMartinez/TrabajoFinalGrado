import {Dispatch} from "react";
import {WEBS_ACTION} from "../../../redux/Types";

export const websAction = () => async (dispatch: Dispatch<any>) => {

    const response = await fetch('/obtenerWebs', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });

    const body = await response.json();

    dispatch({
        type: WEBS_ACTION,
        payload: body
    })
}

//Maneja la petición de los tipos
export const websBusquedaAction = (pestanaActual: number | undefined, seleccionado: string | undefined) => async (dispatch: Dispatch<any>) => {

    const response = await fetch('/busquedaWebs', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({pestanaActual, seleccionado})
    });

    const body = await response.json();

    dispatch({
        type: WEBS_ACTION,
        payload: body
    })
}