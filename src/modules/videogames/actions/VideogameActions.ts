import {Dispatch} from "react";
import {NEW_ACCOUNT, NEW_COMMENT, VALORACIONES_ACTION, VIDEOGAME_ACTION} from "../../../redux/Types";
import history from "../../../history";

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

export const valoracionesAction = (slug: string) => async (dispatch: Dispatch<any>) => {

    const response = await fetch('/obtenerValoraciones', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({slug})
    });

    const body = await response.json();
    console.log(body)

    dispatch({
        type: VALORACIONES_ACTION,
        payload: body
    })
}

export const newComment = (formValues: Comment) => async (dispatch: Dispatch<any>) => {

    //Llamar al backend y pasarle los datos del formulario
    const response = await fetch('/newComment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues)
    });

    const body = await response.json();

    dispatch({
        type: NEW_COMMENT,
        payload: body
    })
}