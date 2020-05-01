import {combineReducers} from 'redux';
import {reducer as formReducer} from "redux-form";

interface IReducers {
    quitar: any
}

export default combineReducers<IReducers>({
    quitar: null
})