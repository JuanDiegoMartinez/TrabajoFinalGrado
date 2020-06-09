import {Action, VIDEOGAME_ACTION} from "../../../redux/Types";

export default (state: any = {}, action: Action) : {} => {

    switch (action.type) {
        case VIDEOGAME_ACTION:
            return {...state, objeto: action.payload};
        default:
            return state;
    }
}