import React from "react";
import {Router, Route} from 'react-router-dom';
import {ROUTE_HOME, ROUTE_USER_ADD, ROUTE_USER_DETAIL, ROUTE_USER_EDIT, ROUTE_USERS} from "./routes";
import {History} from "history";
import UserListScreen from "../modules/UserListScreen";

export interface RoutingProps {
    history: History,
}

export default class Routing extends React.Component<RoutingProps, any> {

    render() : JSX.Element {
        return(
            <div>
                <Router history={this.props.history}>
                    <Route path={ROUTE_HOME} exact component={UserListScreen}/>
                </Router>
            </div>
        );
    }
}