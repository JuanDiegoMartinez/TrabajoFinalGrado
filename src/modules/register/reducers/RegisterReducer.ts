import {Action, NEW_ACCOUNT} from "../../../redux/Types";

export default (state: any = {}, action: Action) : {} => {

    switch (action.type) {
        case NEW_ACCOUNT:
            return {...state, cuenta: action.payload};
        default:
            return state;
    }
}