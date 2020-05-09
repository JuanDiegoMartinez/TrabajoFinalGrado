import {combineReducers} from 'redux';
import {reducer as formReducer} from "redux-form";
import RegisterReducer from '../modules/register/reducers/RegisterReducer';


export default combineReducers<any>({
    form: formReducer,
    RegisterReducer
})