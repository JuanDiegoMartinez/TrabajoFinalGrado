import React from 'react';
import RegisterView from "./RegisterView";
import {UserRegister} from "../../models/data/User";
import {newUser, vaciarReducerRegistro} from "./actions/RegisterActions";
import {connect} from "react-redux";
import ModalComponent from "../../models/templates/ModalComponent";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import {borrarCookies} from "../../conexion/borrarCookies";

interface ReduxState {
    nuevaCuentaCreada: boolean
}

interface ActionProps {
    newUser: (formValues: UserRegister) => any,
    vaciarReducerRegistro: () => any
}

type Props = ActionProps & ReduxState;

class RegisterDataContainer extends React.Component<Props, {}> {

    componentWillMount(): void {
        borrarCookies("");
    }

    componentWillUnmount(): void {
        this.props.vaciarReducerRegistro();
    }

    onRegisterSubmit = (values: UserRegister) : void => {
        this.props.newUser(values);
    }

    render(): React.ReactNode {

        return (
            <div>
                <ModalComponent
                    open={this.props.nuevaCuentaCreada}
                    parrafo={"Cuenta creada satisfactoriamente, haz click para ir a login"}
                    icono={<CheckCircleOutlineIcon className="icono"/>}
                    recuperarEmail={false}
                />
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

//@ts-ignore
export default connect(mapStateToProps, {newUser, vaciarReducerRegistro})(RegisterDataContainer);