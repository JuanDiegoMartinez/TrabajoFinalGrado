import {Dispatch} from "react";
import {CHANGE_COMMENTS_ACTION, CHANGE_USER_IMAGE_ACTION, OBTAIN_USER_DATA_ACTION} from "../../../redux/Types";
import {UserComplete} from "../../../models/data/User";
import {Valoracion} from "../../../models/data/Valoracion";

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

    dispatch({
        type: OBTAIN_USER_DATA_ACTION,
        payload: body
    })
}

// Envía los datos modificados del usuario
export const enviarDatosUsuarioAction = (datosUsuario: UserComplete) => async (dispatch: Dispatch<any>) => {
        
    //Llamar al backend y pasarle los datos del formulario
    const response = await fetch('/cambiarDatosUsuario', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datosUsuario)
    });

    const body = await response.json();

    dispatch({
        type: OBTAIN_USER_DATA_ACTION,
        payload: body
    })
}

// Envía la url de la imagen modificada por el usuario
export const enviarImagenAction = (url: string) => async (dispatch: Dispatch<any>) => {

    //Llamar al backend y pasarle los datos del formulario
    const response = await fetch('/cambiarImagen', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({url})
    });

    const body = await response.text();

    dispatch({
        type: CHANGE_USER_IMAGE_ACTION,
        payload: url
    })
}

// Envía los comentario modificados por el usuario
export const enviarComentariosAction = (comentarios: Valoracion[]) => async (dispatch: Dispatch<any>) => {

    //Llamar al backend y pasarle los datos del formulario
    const response = await fetch('/cambiarComentarios', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(comentarios)
    });

    const body = await response.json();

    dispatch({
        type: CHANGE_COMMENTS_ACTION,
        payload: body
    })
}