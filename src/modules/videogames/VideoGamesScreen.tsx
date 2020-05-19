import React from "react";
import LoggedScreen from "../../base/screens/LoggedScreen";
import VideoGamesDataContainer from "./VideoGamesDataContainer";

export default class VideoGamesScreen extends LoggedScreen {

    renderScreen(): React.ReactNode {
        return (
            <VideoGamesDataContainer/>
        );
    }
}