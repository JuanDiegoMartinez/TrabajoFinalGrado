import {Action, NEWS_ACTION, VACIAR_REDUCER_NOTICIAS} from "../../../redux/Types";

export default (state: any = {}, action: Action) : {} => {

    switch (action.type) {
        case NEWS_ACTION:
            return {...state, objeto: action.payload};
        case VACIAR_REDUCER_NOTICIAS:
            return {...state, objeto: undefined}
        default:
            return state;
    }
}