import {Action, NEW_LOGIN} from "../../../redux/Types";

export default (state: any = {}, action: Action) : {} => {

    switch (action.type) {
        case NEW_LOGIN:
            return {...state, user: action.payload.user};
        default:
            return state;
    }
}