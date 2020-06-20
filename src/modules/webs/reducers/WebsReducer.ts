import {Action, WEBS_ACTION} from "../../../redux/Types";

export default (state: any = {}, action: Action) : {} => {

    switch (action.type) {
        case WEBS_ACTION:
            return {...state, webs: action.payload.webs, page: action.payload.page, rowsPerPage: action.payload.rowsPerPage, seleccionado: action.payload.seleccionado};
        default:
            return state;
    }
}