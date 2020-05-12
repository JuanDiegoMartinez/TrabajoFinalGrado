import React from "react";
import LoggedScreen from "../../base/screens/LoggedScreen";
import NewsDataContainer from "./NewsDataContainer";

export default class NewsScreen extends LoggedScreen {

    renderScreen(): React.ReactNode {
        return (
            <NewsDataContainer />
        );
    }

}