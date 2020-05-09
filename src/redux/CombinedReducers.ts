import {combineReducers} from 'redux';
import {reducer as formReducer} from "redux-form";
import RegisterViewReducer from '../modules/register/RegisterView';
import LoginViewReducer from '../modules/login/LoginView'

export default combineReducers<any>({
    form: formReducer,
    RegisterReducer: RegisterViewReducer,
    LoginReducer: LoginViewReducer
})