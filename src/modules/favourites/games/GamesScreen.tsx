import React from "react";
import LoggedScreen from "../../../base/screens/LoggedScreen";
import GamesDataContainer from "./GamesDataContainer";

export default class GamesScreen extends LoggedScreen {

    renderScreen(): React.ReactNode {
        return (
            <GamesDataContainer />
        );
    }
}