import {Action, JUEGOS_FAVORITOS_MODIFICADOS, NEW_LOGIN} from "../../../../../redux/Types";
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
        default:
            return state;
    }
}