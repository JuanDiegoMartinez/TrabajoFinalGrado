import React from 'react';
import RegisterView from "./RegisterView";
import {User} from "../../models/User";

export default class RegisterDataContainer extends React.Component<{}, {}> {

    onRegisterSubmit = (values: User) : void => {
        console.log("Estoy en onRegisterSubmit en RegisterDataContainer");
        console.log(values);
        //Insertar en bbdd e ir a login
        //new TaskUserAdd(values).execute();
        //goToRoute(ROUTE_USERS,{});
    }

    render(): React.ReactNode {

        return (
            <RegisterView onFormSubmit={this.onRegisterSubmit}/>
        );
    }
}