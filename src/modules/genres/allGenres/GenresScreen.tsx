import React from "react";
import LoggedScreen from "../../../base/screens/LoggedScreen";
import GenresDataContainer from "./GenresDataContainer";

export default class GenresScreen extends LoggedScreen {

    renderScreen(): React.ReactNode {
        return (
            <GenresDataContainer />
        );
    }
}