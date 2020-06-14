import {Dispatch} from "react";
import {GENRES_ACTION, VIDEOGAME_ACTION} from "../../../redux/Types";

export const genresAction = () => async (dispatch: Dispatch<any>) => {

    const response = await fetch('/obtenerGeneros', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });

    const body = await response.json();

    dispatch({
        type: GENRES_ACTION,
        payload: body
    })
}