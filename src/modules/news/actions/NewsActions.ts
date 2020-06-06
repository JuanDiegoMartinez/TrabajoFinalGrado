import {Dispatch} from "react";
import {NEWS_ACTION} from "../../../redux/Types";

//Maneja la petición de las noticias
export const newsActionCreator = () => async (dispatch: Dispatch<any>) => {

    const response = await fetch('/obtenerNoticias', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });

    const body = await response.json();

    dispatch({
        type: NEWS_ACTION,
        payload: body
    })
}

//Maneja la petición de la barra de búsqueda
export const searchBarActionCreator = (palabra: string) => async (dispatch: Dispatch<any>) => {

    const response = await fetch('/busquedaNoticias', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({palabra})
    });

    const body = await response.json();

    dispatch({
        type: NEWS_ACTION,
        payload: body
    })
}