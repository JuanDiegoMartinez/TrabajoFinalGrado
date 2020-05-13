import React from "react";
import LoggedScreen from "../../base/screens/LoggedScreen";
import ModifyDataDataContainer from "./ModifyDataDataContainer";

export default class ModifyDataScreen extends LoggedScreen {

    renderScreen() : React.ReactNode {
        return (
            <ModifyDataDataContainer/>
        );
    }
}