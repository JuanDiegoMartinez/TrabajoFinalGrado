import React from "react";
import ModifyDataView from "./ModifyDataView";
import {Login} from "../../models/data/Login";

export default class ModifyDataDataContainer extends React.Component<{}, {}> {

    onLoginSubmit = (values: Login) : void => {
        console.log("Estoy en LoginDataContainer");
        console.log(values);
        //Insertar en bbdd e ir a login
        //new TaskUserAdd(values).execute();
        //goToRoute(ROUTE_USERS,{});
    }

    render(): React.ReactNode {
        return(
            <ModifyDataView onFormSubmit={this.onLoginSubmit}/>
        );
    }
}