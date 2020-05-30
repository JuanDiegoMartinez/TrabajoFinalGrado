import {Dispatch} from "react";
import axios from "../../../connection/Axios";
import {NEWS_ACTION} from "../../../redux/Types";


export const newsActionCreator = () => async (dispatch: Dispatch<any>) => {

    console.log("2.Ejecutamos la acción");
    //Llamar al backend y obtener las últimas noticias
    let response = await axios.get('/ultimasNoticias');

    console.log("soy la response:", response.data);

    dispatch({
        type: NEWS_ACTION,
        payload: response.data
    })
}