import {Action, PUBLISHER_ACTION} from "../../../redux/Types";

export default (state: any = {}, action: Action) : {} => {

    switch (action.type) {
        case PUBLISHER_ACTION:
            return {...state, editor: action.payload.editores[0], juegos: action.payload.listaJuegos};
        default:
            return state;
    }
}