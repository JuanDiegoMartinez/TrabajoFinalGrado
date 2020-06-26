import {Action, PUBLISHER_ACTION, VACIAR_REDUCER_EDITOR} from "../../../redux/Types";

export default (state: any = {}, action: Action) : {} => {

    switch (action.type) {
        case PUBLISHER_ACTION:
            return {...state, editor: action.payload.editores[0], juegos: action.payload.listaJuegos};
        case VACIAR_REDUCER_EDITOR:
            return {...state, editor: undefined, juegos: undefined};
        default:
            return state;
    }
}