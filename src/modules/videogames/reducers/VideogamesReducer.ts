import {Action, VACIAR_REDUCER_VIDEOJUEGOS, VIDEOGAMES_ACTION} from "../../../redux/Types";

export default (state: any = {}, action: Action) : {} => {

    switch (action.type) {
        case VIDEOGAMES_ACTION:
            return {...state, objeto: action.payload};
        case VACIAR_REDUCER_VIDEOJUEGOS:
            return {...state, objeto: undefined};
        default:
            return state;
    }
}