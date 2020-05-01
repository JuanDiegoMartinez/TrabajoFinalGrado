import React from "react";
import {Router, Route} from 'react-router-dom';
import {ROUTE_HOME, ROUTE_LOGIN, ROUTE_USER_ADD, ROUTE_USER_DETAIL, ROUTE_USER_EDIT, ROUTE_USERS} from "./routes";
import UserListScreen from "../modules/users/list/UserListScreen";
import {History} from "history";
import UserDetailScreen from "../modules/users/detail/UserDetailScreen";
import UserEditScreen from "../modules/users/edit/UserEditScreen";
import UserAddScreen from "../modules/users/add/UserAddScreen";

export interface RoutingProps {
    history: History,
}

export default class Routing extends React.Component<RoutingProps, any> {

    render() : JSX.Element {
        return(
            <div>
                <Router history={this.props.history}>
                    <Route path={ROUTE_LOGIN} exact component={UserListScreen}/>
                    <Route path={ROUTE_HOME} exact component={UserListScreen}/>
                    <Route path={ROUTE_USERS} exact component={UserListScreen}/>
                    <Route path={ROUTE_USER_DETAIL} exact component={UserDetailScreen}/>
                    <Route path={ROUTE_USER_EDIT} exact component={UserEditScreen}/>
                    <Route path={ROUTE_USER_ADD} exact component={UserAddScreen}/>
                </Router>
            </div>
        );
    }
}