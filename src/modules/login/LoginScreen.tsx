import React from "react";
import LoggedScreen from "../../base/screens/LoggedScreen";
import LoginDataContainer from "./LoginDataContainer";

export default class RegisterScreen extends LoggedScreen {

    renderScreen(): React.ReactNode {

        return(
            // @ts-ignore
            <LoginDataContainer id={this.props.location.state}/>
        );
    }
}
