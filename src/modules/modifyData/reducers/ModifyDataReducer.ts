import {Action, CHANGE_COMMENTS_ACTION, CHANGE_USER_IMAGE_ACTION, OBTAIN_USER_DATA_ACTION} from "../../../redux/Types";

export default (state: any = {}, action: Action) : {} => {

    switch (action.type) {
        case OBTAIN_USER_DATA_ACTION:
            return {...state, datosUsuario: action.payload.user, comentarios: action.payload.comentarios, imagenUsuario: action.payload.user.rutaImagen};
        case CHANGE_USER_IMAGE_ACTION:
            return {...state, imagenUsuario: action.payload};
        case CHANGE_COMMENTS_ACTION:
            return {...state, comentarios: action.payload};
        default:
            return state;
    }
}