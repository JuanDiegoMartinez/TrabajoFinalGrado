import {Action, GENRE_ACTION, VACIAR_REDUCER_GENRE} from "../../../redux/Types";

export default (state: any = {}, action: Action) : {} => {

    switch (action.type) {
        case GENRE_ACTION:
            return {...state, genero: action.payload.generos[0], juegos: action.payload.listaJuegos};
        case VACIAR_REDUCER_GENRE:
            return {...state, genero: undefined, juegos: undefined};
        default:
            return state;
    }
}