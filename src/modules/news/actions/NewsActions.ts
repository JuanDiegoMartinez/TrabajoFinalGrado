import {Dispatch} from "react";
import {NEWS_ACTION} from "../../../redux/Types";

export const newsActionCreator = () => async (dispatch: Dispatch<any>) => {

    //Llamar al backend y obtener las últimas noticias
    //let response = await axios.get('/obtenerNoticias');

    const response = await fetch('/obtenerNoticias', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({page: 1}),

    });
    const body = await response.json();
    console.log(body);

    console.log(response);

    dispatch({
        type: NEWS_ACTION,
        payload: body
    })
}

export const searchBarActionCreator = () => async (dispatch: Dispatch<any>) => {

    //Llamar al backend y obtener las últimas noticias
    //let response = await axios.get("/busquedaNoticias");
    //console.log(response.data)

    const response = await fetch('/busquedaNoticias', {
        method: 'GET'
    });

    const body = await response.json();

    dispatch({
        type: NEWS_ACTION,
        payload: body
    })
}