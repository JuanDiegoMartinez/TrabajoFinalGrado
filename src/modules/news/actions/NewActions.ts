import {Dispatch} from "react";
import {NEW_ACTION, VACIAR_REDUCER_NOTICIA, VACIAR_REDUCER_VIDEOJUEGO, VIDEOGAME_ACTION} from "../../../redux/Types";

//Maneja la petición de la noticia
export const noticiaAction = (slug: string) => async (dispatch: Dispatch<any>) => {

    const response = await fetch('/obtenerNoticia', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({slug})
    });

    const body = await response.json();

    dispatch({
        type: NEW_ACTION,
        payload: body
    })
}

export const vaciarReducerNoticia = () => {

    return {
        type: VACIAR_REDUCER_NOTICIA,
        payload: ""
    }
}