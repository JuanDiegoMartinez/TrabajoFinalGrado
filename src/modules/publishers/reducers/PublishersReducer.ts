import {Action, PUBLISHERS_ACTION} from "../../../redux/Types";

export default (state: any = {}, action: Action) : {} => {

    switch (action.type) {
        case PUBLISHERS_ACTION:
            return {...state, editores: action.payload};
        default:
            return state;
    }
}