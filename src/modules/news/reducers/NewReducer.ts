import {Action, NEW_ACTION, VACIAR_REDUCER_NOTICIA} from "../../../redux/Types";

export default (state: any = {}, action: Action) : {} => {

    switch (action.type) {
        case NEW_ACTION:
            return {...state, noticia: action.payload.noticia[0]};
        case VACIAR_REDUCER_NOTICIA:
            return {...state, noticia: undefined}
        default:
            return state;
    }
}