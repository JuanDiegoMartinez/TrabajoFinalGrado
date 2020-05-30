import {Action, NEWS_ACTION} from "../../../redux/Types";

export default (state: any = {}, action: Action) : {} => {

    switch (action.type) {
        case NEWS_ACTION:
            console.log("3.Estamos en el reducer");
            return {...state, lastNews: action.payload};
        default:
            return state;
    }
}