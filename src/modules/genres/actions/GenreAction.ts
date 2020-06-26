import {Dispatch} from "react";
import {GENRE_ACTION, VACIAR_REDUCER_GENRE, VACIAR_REDUCER_NOTICIA} from "../../../redux/Types";

export const genreAction = (genero: string) => async (dispatch: Dispatch<any>) => {

    const response = await fetch('/obtenerGenero', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({genero})
    });

    const body = await response.json();

    dispatch({
        type: GENRE_ACTION,
        payload: body
    })
}

export const vaciarReducerGenre = () => {

    return {
        type: VACIAR_REDUCER_GENRE,
        payload: ""
    }
}