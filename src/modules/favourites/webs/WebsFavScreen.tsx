import React from "react";
import LoggedScreen from "../../../base/screens/LoggedScreen";
import WebsFavDataContainer from "./WebsFavDataContainer";

export default class WebsFavScreen extends LoggedScreen {

    renderScreen(): React.ReactNode {
        return (
            <WebsFavDataContainer />
        );
    }
}