import {Dispatch} from "react";
import {OBTAIN_USER_DATA_ACTION} from "../../../redux/Types";

//obtiene los datos del usuario
export const obtenerDatosUsuarioAction = () => async (dispatch: Dispatch<any>) => {

    //Llamar al backend y pasarle los datos del formulario
    const response = await fetch('/obtenerDatosUsuario', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });

    const body = await response.json();
    console.log("soy el body: ", body);

    dispatch({
        type: OBTAIN_USER_DATA_ACTION,
        payload: body
    })
}