import {
    Action,
    CHANGE_USER_IMAGE_ACTION,
    JUEGOS_FAVORITOS_MODIFICADOS,
    NEW_LOGIN,
    WEBS_FAVORITAS_MODIFICADAS
} from "../../../../../redux/Types";
import {SESSION_ACTION} from "../../../../../redux/Types";

const INITIAL_STATE = {
    user: '',
    imagen: '',
    juegosFavoritos: [],
    websFavoritas: []
}

export default (state: any = INITIAL_STATE, action: Action) : {} => {

    switch (action.type) {
        case SESSION_ACTION:
            if (action.payload.user === undefined) {
                return {...state, user: '', imagen: '', juegosFavoritos: [], websFavoritas: []};
            }
            return {...state, user: action.payload.user, imagen: action.payload.imagen, juegosFavoritos: action.payload.juegosFavoritos, websFavoritas: action.payload.websFavoritas};
        case NEW_LOGIN:
            return {...state, user: action.payload.user, imagen: action.payload.imagen, juegosFavoritos: action.payload.juegosFavoritos, websFavoritas: action.payload.websFavoritas};
        case JUEGOS_FAVORITOS_MODIFICADOS:
            return {...state, juegosFavoritos: action.payload};
        case WEBS_FAVORITAS_MODIFICADAS:
            return {...state, websFavoritas: action.payload};
        case CHANGE_USER_IMAGE_ACTION:
            return {...state, imagen: action.payload}
        default:
            return state;
    }
}