import {Action, OBTAIN_USER_DATA_ACTION} from "../../../redux/Types";

export default (state: any = {}, action: Action) : {} => {

    switch (action.type) {
        case OBTAIN_USER_DATA_ACTION:
            return {...state, datosUsuario: action.payload.user, comentarios: action.payload.comentarios};
        default:
            return state;
    }
}