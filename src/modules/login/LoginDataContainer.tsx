import React from 'react';
import LoginView from "./LoginView";
import {Login} from "../../models/data/Login";
import {connect} from "react-redux";
import {newLogin} from "./actions/LoginActions";

interface ReduxState {
    login: any
}

interface Actions {
    newLogin: (formValues: Login) => any
}

type Props = ReduxState & Actions;

class LoginDataContainer extends React.Component<Props, {}> {

    onLoginSubmit = (values: Login) : void => {
        console.log("Estoy en LoginDataContainer: ", values);
        this.props.newLogin(values);
    }

    render(): React.ReactNode {

        return (
            <LoginView onFormSubmit={this.onLoginSubmit}/>
        );
    }
}

const mapStateToProps = (state: any) : ReduxState => {
    return {
        login: state.LoginReducer.login
    }
}

export default connect(mapStateToProps, {newLogin})(LoginDataContainer);