import React from 'react';
import LoginView from "./LoginView";
import {Login} from "../../models/data/Login";
import {connect} from "react-redux";
import {newLogin} from "./actions/LoginActions";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ModalComponent from "../../models/templates/ModalComponent";
import {borrarCookies} from "../../conexion/borrarCookies";
import history from "../../history";

interface LoginDataContainerProps {
    id: string | undefined
}

interface ReduxState {
    user: any
}

interface Actions {
    newLogin: (formValues: Login, prueba: any) => any
}

interface State {
    recuperarPassword: boolean
}

type Props = ReduxState & Actions & LoginDataContainerProps;

class LoginDataContainer extends React.Component<Props, State> {

    componentWillMount(): void {
        borrarCookies("");
        this.setState({
            recuperarPassword: false
        })
    }

    onRecuperarPassword = () => {
        this.setState({
            recuperarPassword: true
        })
    }

    onLoginSubmit = (values: Login) : void => {

        this.props.newLogin(values, this.props.id);
    }

    render(): React.ReactNode {

        return (
            <div>
                <ModalComponent
                    open={this.state.recuperarPassword}
                    parrafo={"Para recuperar tu contraseña escribe tu email"}
                    icono={<MailOutlineIcon className="icono"/>}
                    recuperarEmail={true}
                />
                <LoginView onFormSubmit={this.onLoginSubmit} onRecuperarPassword={this.onRecuperarPassword}/>
            </div>
        );
    }
}

const mapStateToProps = (state: any) : ReduxState => {
    return {
        user: state.LoginReducer.user
    }
}

export default connect(mapStateToProps, {newLogin})(LoginDataContainer);