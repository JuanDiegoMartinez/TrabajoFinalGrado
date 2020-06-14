import {Action, WEBS_ACTION} from "../../../redux/Types";

export default (state: any = {}, action: Action) : {} => {

    switch (action.type) {
        case WEBS_ACTION:
            return {...state, webs: action.payload};
        default:
            return state;
    }
}