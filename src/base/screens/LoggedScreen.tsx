import Screen from "./Screen";
import * as React from "react";
//import AuthManager from "../../utils/AuthManager";
import {Redirect} from "react-router";
import MenuWrapper from "./menu/MenuWrapper";
//import BreadcrumbManager from "../../components/breadcrumb/BreadcrumbManager";

export default abstract class LoggedScreen<P = {}, S = {}> extends Screen<P, S> {

    //private breadcrumbManager: BreadcrumbManager;

    constructor(props: P, context: any) {
        super(props, context);
        //this.breadcrumbManager = new BreadcrumbManager();
    }

    /* RENDER */
    public render(): React.ReactNode {
        /*
        if (!AuthManager.isLogged()) {
            return <Redirect to={ROUTE_LOGIN}/>;
        }

         */
        return <MenuWrapper>{this.renderScreen()}</MenuWrapper>;
    }

    /*
    protected addBreadcrumbScreen(name: string, url: string, icon?: string): void {
        this.breadcrumbManager.addScreen(name, url, icon);
    }

    protected getBreadcrumbManager(): BreadcrumbManager {
        return this.breadcrumbManager;
    }
     */
}
