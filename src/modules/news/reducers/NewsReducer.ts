import {Action, NEWS_ACTION} from "../../../redux/Types";

export default (state: any = {}, action: Action) : {} => {

    switch (action.type) {
        case NEWS_ACTION:
            return {...state, lastNews: action.payload};
        default:
            return state;
    }
}