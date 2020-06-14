import {combineReducers} from 'redux';
import {reducer as formReducer} from "redux-form";
import RegisterReducer from '../modules/register/reducers/RegisterReducer';
import LoginReducer from "../modules/login/reducers/LoginReducer";
import NewsReducer from "../modules/news/reducers/NewsReducer";
import VideogamesReducer from "../modules/videogames/reducers/VideogamesReducer";
import VideogameReducer from "../modules/videogames/reducers/VideogameReducer";
import NavbarReducer from "../base/screens/menu/bars/navbar/NavbarReducer";
import ModifyDataReducer from "../modules/modifyData/reducers/ModifyDataReducer";
import GenresReducer from "../modules/genres/reducers/GenresReducer";
import GenreReducer from "../modules/genres/reducers/GenreReducer";
import PublisherReducer from "../modules/publishers/reducers/PublisherReducer";
import PublishersReducer from "../modules/publishers/reducers/PublishersReducer";
import WebsReducer from "../modules/webs/reducers/WebsReducer";


export default combineReducers<any>({
    form: formReducer,
    RegisterReducer,
    LoginReducer,
    NewsReducer,
    VideogamesReducer,
    VideogameReducer,
    NavbarReducer,
    ModifyDataReducer,
    GenresReducer,
    GenreReducer,
    PublishersReducer,
    PublisherReducer,
    WebsReducer
})