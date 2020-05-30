import {combineReducers} from 'redux';
import {reducer as formReducer} from "redux-form";
import RegisterReducer from '../modules/register/reducers/RegisterReducer';
import LoginReducer from "../modules/login/reducers/LoginReducer";
import NewsReducer from "../modules/news/reducers/NewsReducer";


export default combineReducers<any>({
    form: formReducer,
    RegisterReducer,
    LoginReducer,
    NewsReducer,
})