import {Action, NEW_COMMENT, VALORACIONES_ACTION, VIDEOGAME_ACTION} from "../../../redux/Types";

export default (state: any = {}, action: Action) : {} => {

    switch (action.type) {
        case VIDEOGAME_ACTION:
            return {...state, videojuego: action.payload.videojuego[0], valoraciones: action.payload.valoraciones};
        case NEW_COMMENT:
            return {...state, nuevoComentario: action.payload};
        case VALORACIONES_ACTION:
            return {...state, valoraciones: action.payload};
        default:
            return state;
    }
}