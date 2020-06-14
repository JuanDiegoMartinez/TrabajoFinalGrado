import React from "react";
import {Router, Route} from 'react-router-dom';
import {
    ROUTE_EDITOR,
    ROUTE_EDITORES,
    ROUTE_GENERO,
    ROUTE_GENEROS,
    ROUTE_HOME,
    ROUTE_LOGIN,
    ROUTE_MODIFYDATA,
    ROUTE_NEW,
    ROUTE_REGISTER,
    ROUTE_VIDEOGAME,
    ROUTE_VIDEOGAMES, ROUTE_WEBS
} from "./routes";
import {History} from "history";
import RegisterScreen from "../modules/register/RegisterScreen";
import LoginScreen from "../modules/login/LoginScreen";
import NewsScreen from "../modules/news/allNews/NewsScreen";
import ModifyDataScreen from "../modules/modifyData/ModifyDataScreen";
import VideoGamesScreen from "../modules/videogames/allVideogames/VideoGamesScreen";
import NewScreen from "../modules/news/oneNew/NewScreen";
import VideoGameScreen from "../modules/videogames/oneVideogame/VideoGameScreen";
import GenresScreen from "../modules/genres/allGenres/GenresScreen";
import GenreScreen from "../modules/genres/oneGenre/GenreScreen";
import WebsScreen from "../modules/webs/WebsScreen";
import PublishersScreen from "../modules/publishers/allPublishers/PublishersScreen";
import PublisherScreen from "../modules/publishers/onePublisher/PublisherScreen";

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
                    <Route path={ROUTE_GENEROS} exact component={GenresScreen}/>
                    <Route path={ROUTE_GENERO} exact component={GenreScreen}/>
                    <Route path={ROUTE_WEBS} exact component={WebsScreen}/>
                    <Route path={ROUTE_EDITORES} exact component={PublishersScreen}/>
                    <Route path={ROUTE_EDITOR} exact component={PublisherScreen}/>
                </Router>
            </div>
        );
    }
}