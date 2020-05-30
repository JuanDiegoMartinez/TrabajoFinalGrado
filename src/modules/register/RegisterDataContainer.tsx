import React from 'react';
import RegisterView from "./RegisterView";
import {UserRegister} from "../../models/data/User";
import {newUser} from "./actions/RegisterActions";
import {connect} from "react-redux";
import ModalComponent from "../../models/templates/ModalComponent";

interface ReduxState {
    nuevaCuentaCreada: boolean
}

interface ActionProps {
    newUser: (formValues: UserRegister) => any
}

type Props = ActionProps & ReduxState;

class RegisterDataContainer extends React.Component<Props, {}> {

    onRegisterSubmit = (values: UserRegister) : void => {
        //Insertar en bbdd e ir a login o modify data
        this.props.newUser(values);
    }

    render(): React.ReactNode {

        return (
            <div>
                <ModalComponent open={this.props.nuevaCuentaCreada}/>
                <RegisterView onFormSubmit={this.onRegisterSubmit}/>
            </div>
        );
    }
}

const mapStateToProps = (state: any) : ReduxState => {
    return {
        nuevaCuentaCreada: state.RegisterReducer.nuevaCuenta
    }
}

export default connect(mapStateToProps, {newUser})(RegisterDataContainer);