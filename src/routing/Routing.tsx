import React from "react";
import {Router, Route} from 'react-router-dom';
import {
    ROUTE_HOME,
    ROUTE_LOGIN,
    ROUTE_MODIFYDATA,
    ROUTE_NEW,
    ROUTE_REGISTER,
    ROUTE_VIDEOGAME,
    ROUTE_VIDEOGAMES
} from "./routes";
import {History} from "history";
import RegisterScreen from "../modules/register/RegisterScreen";
import LoginScreen from "../modules/login/LoginScreen";
import NewsScreen from "../modules/news/allNews/NewsScreen";
import ModifyDataScreen from "../modules/modifyData/ModifyDataScreen";
import VideoGamesScreen from "../modules/videogames/allVideogames/VideoGamesScreen";
import NewScreen from "../modules/news/oneNew/NewScreen";
import VideoGameScreen from "../modules/videogames/oneVideogame/VideoGameScreen";

export interface RoutingProps {
    history: History,
}

export default class Routing extends React.Component<RoutingProps, any> {

    render() : JSX.Element {
        return(
            <div>
                <Router history={this.props.history}>
                    <Route path={ROUTE_HOME} exact component={NewsScreen}/>
                    <Route path={ROUTE_REGISTER} exact component={RegisterScreen}/>
                    <Route path={ROUTE_LOGIN} exact component={LoginScreen}/>
                    <Route path={ROUTE_MODIFYDATA} exact component={ModifyDataScreen}/>
                    <Route path={ROUTE_VIDEOGAMES} exact component={VideoGamesScreen}/>
                    <Route path={ROUTE_NEW} exact component={NewScreen}/>
                    <Route path={ROUTE_VIDEOGAME} exact component={VideoGameScreen}/>
                </Router>
            </div>
        );
    }
}