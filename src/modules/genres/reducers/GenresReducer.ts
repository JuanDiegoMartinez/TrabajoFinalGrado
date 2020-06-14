import {Action, GENRES_ACTION} from "../../../redux/Types";

export default (state: any = {}, action: Action) : {} => {

    switch (action.type) {
        case GENRES_ACTION:
            return {...state, generos: action.payload};
        default:
            return state;
    }
}