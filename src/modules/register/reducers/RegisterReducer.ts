import {Action, NEW_ACCOUNT, VACIAR_REDUCER_REGISTRO} from "../../../redux/Types";

export default (state: any = {}, action: Action) : {} => {

    switch (action.type) {
        case NEW_ACCOUNT:
            return {...state, nuevaCuenta: action.payload};
        case VACIAR_REDUCER_REGISTRO:
            return {...state, nuevaCuenta: null};
        default:
            return state;
    }
}