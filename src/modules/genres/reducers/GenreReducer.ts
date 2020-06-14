import {Action, GENRE_ACTION} from "../../../redux/Types";

export default (state: any = {}, action: Action) : {} => {

    switch (action.type) {
        case GENRE_ACTION:
            return {...state, genero: action.payload.generos[0], juegos: action.payload.listaJuegos};
        default:
            return state;
    }
}