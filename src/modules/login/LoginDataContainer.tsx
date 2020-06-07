import React from 'react';
import LoginView from "./LoginView";
import {Login} from "../../models/data/Login";
import {connect} from "react-redux";
import {newLogin} from "./actions/LoginActions";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ModalComponent from "../../models/templates/ModalComponent";

interface ReduxState {
    user: any
}

interface Actions {
    newLogin: (formValues: Login) => any
}

type Props = ReduxState & Actions;

class LoginDataContainer extends React.Component<Props, {}> {

    onLoginSubmit = (values: Login) : void => {
        this.props.newLogin(values);
    }

    //Falta
    render(): React.ReactNode {

        return (
            <div>
                <ModalComponent
                    open={false}
                    parrafo={"Para recuperar tu contraseña escribe tu email"}
                    icono={<MailOutlineIcon className="icono"/>}
                    recuperarEmail={true}
                />
                <LoginView onFormSubmit={this.onLoginSubmit}/>
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