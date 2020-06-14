import React from "react";
import LoggedScreen from "../../base/screens/LoggedScreen";
import WebsDataContainer from "./WebsDataContainer";

export default class WebsScreen extends LoggedScreen {

    renderScreen(): React.ReactNode {

        return(
            <WebsDataContainer />
        );
    }
}