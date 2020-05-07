import {combineReducers} from 'redux';
import {reducer as formReducer} from "redux-form";
import RegisterViewReducer from '../modules/register/RegisterView';

interface IReducers {
    RegisterReducer: any
}

export default combineReducers<any>({
    form: formReducer,
    RegisterReducer: RegisterViewReducer,
})