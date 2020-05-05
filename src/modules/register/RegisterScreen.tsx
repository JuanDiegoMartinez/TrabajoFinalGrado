import React from 'react';
import LoggedScreen from "../../base/screens/LoggedScreen";
import RegisterDataContainer from "./RegisterDataContainer";

export default class RegisterScreen extends LoggedScreen {

    renderScreen(): React.ReactNode {

        return(
            <RegisterDataContainer/>
        );
    }
}