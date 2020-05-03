import Screen from "./Screen";
import * as React from "react";
import {Redirect} from "react-router";
//import AuthManager from "../../utils/AuthManager";
import {ROUTE_USERS} from "../../routing/routes";

export default abstract class UnloggedScreen<P = {}, S = {}> extends Screen<P, S>{

    public render(): React.ReactNode {
        /*
        if (AuthManager.isLogged()) {
            return <Redirect to={ROUTE_USERS} />;
        }

         */
        return this.renderScreen();
    }
}
