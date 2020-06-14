import {Action} from "../../../../../redux/Types";
import {SESSION_ACTION} from "../../../../../redux/Types";

const INITIAL_STATE = {
    user: '',
    imagen: ''
}

export default (state: any = INITIAL_STATE, action: Action) : {} => {

    switch (action.type) {
        case SESSION_ACTION:
            if (action.payload.user === undefined) {
                return {...state, user: '', imagen: ''};
            }
            return {...state, user: action.payload.user, imagen: action.payload.imagen};
        default:
            return state;
    }
}