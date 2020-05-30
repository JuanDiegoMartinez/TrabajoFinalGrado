import {Action, NEW_LOGIN} from "../../../redux/Types";

export default (state: any = {}, action: Action) : {} => {

    switch (action.type) {
        case NEW_LOGIN:
            console.log("Estoy en el reducer: ", action.payload);
            return {...state, login: action.payload};
        default:
            return state;
    }
}