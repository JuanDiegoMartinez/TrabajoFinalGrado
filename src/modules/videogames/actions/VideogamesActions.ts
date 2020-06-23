import {Dispatch} from "react";
import {VACIAR_REDUCER_VIDEOJUEGOS, VIDEOGAMES_ACTION} from "../../../redux/Types";

//Maneja la petición de los videojuegos
export const videogamesActionCreator = () => async (dispatch: Dispatch<any>) => {

    const response = await fetch('/obtenerVideojuegos', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });

    const body = await response.json();

    dispatch({
        type: VIDEOGAMES_ACTION,
        payload: body
    })
}

//Maneja la petición de la barra de búsqueda
export const busquedaActionCreator = (palabra: string | undefined, pestanaActual: number | undefined, seleccionado: string | undefined) => async (dispatch: Dispatch<any>) => {

    const response = await fetch('/busquedaVideojuegos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({palabra, pestanaActual, seleccionado})
    });

    const body = await response.json();

    dispatch({
        type: VIDEOGAMES_ACTION,
        payload: body
    })
}

export const vaciarReducerVideojuegos = () => {

    return {
        type: VACIAR_REDUCER_VIDEOJUEGOS,
        payload: ""
    }
}