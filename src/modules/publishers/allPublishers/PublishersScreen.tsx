import React from "react";
import LoggedScreen from "../../../base/screens/LoggedScreen";
import PublishersDataContainer from "./PublishersDataContainer";

export default class PublishersScreen extends LoggedScreen {

    renderScreen(): React.ReactNode {
        return (
            <PublishersDataContainer />
        );
    }
}