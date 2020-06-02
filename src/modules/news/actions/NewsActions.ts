import {Dispatch} from "react";
import axios from "../../../connection/Axios";
import {NEWS_ACTION} from "../../../redux/Types";

export const newsActionCreator = () => async (dispatch: Dispatch<any>) => {

    //Llamar al backend y obtener las últimas noticias
    let response = await axios.get('/obtenerNoticias');

    dispatch({
        type: NEWS_ACTION,
        payload: response.data
    })
}

export const searchBarActionCreator = () => async (dispatch: Dispatch<any>) => {

    //Llamar al backend y obtener las últimas noticias
    let response = await axios.get("/busquedaNoticias");
    console.log(response.data)

    dispatch({
        type: NEWS_ACTION,
        payload: response.data
    })
}