import React from 'react';
import LoginView from "./LoginView";
import {Login} from "../../models/data/Login";

export default class LoginDataContainer extends React.Component<{}, {}> {

    onLoginSubmit = (values: Login) : void => {
        console.log("Estoy en LoginDataContainer");
        console.log(values);
        //Insertar en bbdd e ir a login
        //new TaskUserAdd(values).execute();
        //goToRoute(ROUTE_USERS,{});
    }

    render(): React.ReactNode {

        return (
            <LoginView onFormSubmit={this.onLoginSubmit}/>
        );
    }
}