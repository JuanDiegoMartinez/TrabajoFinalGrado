import {Dispatch} from "react";
import {VIDEOGAME_ACTION} from "../../../redux/Types";

//Maneja la petición de los videojuegos
export const videogameActionCreator = (slug: string) => async (dispatch: Dispatch<any>) => {

    const response = await fetch('/obtenerVideojuego', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({slug})
    });

    const body = await response.json();

    dispatch({
        type: VIDEOGAME_ACTION,
        payload: body
    })
}